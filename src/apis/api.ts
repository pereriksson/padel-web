"use server"

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
    console.log(e)
    // 400 bad request means user is probably already subscribed
  }

}
