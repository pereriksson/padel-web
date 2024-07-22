"use server"
import { createClient } from 'contentful';

export async function getEntries() {
  if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) return []

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const res = await client.getEntries({
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
