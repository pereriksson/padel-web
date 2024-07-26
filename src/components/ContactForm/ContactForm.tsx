"use client"
import Image from "next/image";
import {Fragment, useRef, useState} from "react";
import {sendEmail} from "@/apis/api";
import imageUrl from "@/utils/imageUrl";

type TwoColumnProps = {
  cfd: any;
}

export default function ContactForm(props: TwoColumnProps) {
  const {cfd} = props
  const [msg, setMsg] = useState<string>("")

  async function sendMsg(e: any) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const firstName = form.get("firstName")
    const lastName = form.get("lastName")
    const email = form.get("email")
    const phone = form.get("phone")
    const message = form.get("message")

    if (!email) {
      return setMsg("Please enter an email address.")
    }

    if (cfd.fields.showMessage && !message) {
      return setMsg("Please enter a message.")
    }

    await sendEmail(
      cfd.fields.title,
      `
      First name: ${firstName}
      Last name: ${lastName}
      Email: ${email}
      Phone: ${phone}
      Message:
      ${message}
      `
    )

    setMsg("Your message has been sent!")
  }

  return (
    <div className="container">
      <div className="contact-form">
        <div className="image">
          <Image src={imageUrl(cfd.fields.image.fields.file.url)} fill={true} alt=""/>
        </div>
        <div className="text">
          <div className="inner">
            <h2>{cfd.fields.title}</h2>
            {msg && (
              <p>{msg}</p>
            )}
            <form onSubmit={sendMsg}>
              <input type="text" name="firstName" autoComplete="given-name" placeholder="First Name"/>
              <input type="text" name="lastName" autoComplete="family-name" placeholder="Last Name"/>
              <input type="email" name="email" className="email" autoComplete="email" placeholder="Email"/>
              <input type="tel" name="phone" className="phone" autoComplete="tel" placeholder="Phone Number"/>
              {cfd.fields.showMessage && (
                <textarea name="message" placeholder="Message"></textarea>
              )}
              <div>
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
