"use server"
import {createClient, EntryFieldTypes, Entry, BaseEntry, EntrySkeletonType} from 'contentful';
import axios from "axios";
import {headers} from "next/headers"

function getClientIp() {
  const FALLBACK_IP_ADDRESS = '0.0.0.0'
  const forwardedFor = headers().get('x-forwarded-for')

  if (forwardedFor) {
    return forwardedFor.split(',')[0] ?? FALLBACK_IP_ADDRESS
  }

  return headers().get('x-real-ip') ?? FALLBACK_IP_ADDRESS
}

type PageEntry = {
  contentTypeId: "page",
  fields: {
    title: EntryFieldTypes.Text,
    description: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
    frontPage: EntryFieldTypes.Boolean,
    content: Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>
  }
}

export async function getPageFromSlug(slug: string): Promise<Entry<PageEntry>> {
  const entries = await getEntries()
  let entry
  if (!slug) {
    entry = entries.find((e: Entry<PageEntry>) => e.fields.frontPage)
  } else {
    entry = entries.find((e: Entry<PageEntry>) => e.fields.slug === slug)
  }

  if (!entry) {
    throw new Error("Entry not found")
  }

  return entry
}

export async function getEntries() {
  if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
    throw new Error("Contentful has not been configured.")
  }

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const res = await client.getEntries<PageEntry>({
    content_type: "page",
    include: 10
  })
  return res.items
}

type RecaptchaResponse = {
  success: boolean
  challenge_ts: string
  hostname: string
  score: number
  action: string
}

export async function verifyRecaptcha(response: string): Promise<RecaptchaResponse> {
  return axios.post<RecaptchaResponse>("https://www.google.com/recaptcha/api/siteverify", null, {
    params: {
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: response,
      remoteip: getClientIp()
    }
  })
    .then(res => res.data)
}

export async function sendEmail(subject: string, msg: string, token: string) {
  const res = await verifyRecaptcha(token)

  if (!res.success) {
    return false
  }

  if (res.score < .5) {
    return false
  }

  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const payload = {
    to: process.env.SENDGRID_SENDER_EMAIL,
    from: process.env.SENDGRID_SENDER_EMAIL,
    subject,
    text: msg
  }

  await sgMail
    .send(payload)
    .catch(() => {
      // Fail silently
    })

  return true
}

export async function subscribeUserToList(emailAddress: string, token: string) {
  const res = await verifyRecaptcha(token)

  if (!res.success) {
    return false
  }

  if (res.score < .5) {
    return false
  }

  const client = require("@mailchimp/mailchimp_marketing");

  client.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX
  });

  try {
    const response = await client.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
      email_address: emailAddress,
      status: "subscribed"
    });
  } catch (e) {
    // 400 bad request means user is probably already subscribed
  }

  return true
}
