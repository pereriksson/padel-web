"use server"
import {createClient, EntryFieldTypes, Entry, BaseEntry, EntrySkeletonType} from 'contentful';
import {TypePage} from "@/types/contentful"

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

export async function sendEmail(subject: string, msg: string) {
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const payload = {
    to: process.env.SENDGRID_SENDER_EMAIL,
    from: process.env.SENDGRID_SENDER_EMAIL,
    subject,
    text: msg
  }

  sgMail
    .send(payload)
    .catch(() => {
      // Fail silently
    })
}

export async function subscribeUserToList(emailAddress: string) {
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

}
