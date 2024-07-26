"use client"
import Image from "next/image";
import imageUrl from "@/utils/imageUrl";
import {useState} from "react";
import {sendEmail} from "@/apis/api";

type SubscriptionFormProps = {
  cfd: any
}

export default function SubscriptionForm(props: SubscriptionFormProps) {
  const {cfd} = props
  const [successMsg, setSuccessMsg] = useState<string>("")
  const [errorMsg, setErrorMsg] = useState<string>("")

  const duration = ["1h", "1,5h", "2h"]
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const hours = []
  for (let i = 6; i <= 11; i++) {
    hours.push(`${i}am`)
  }
  hours.push(`12pm`)
  for (let i = 1; i <= 10; i++) {
    hours.push(`${i}pm`)
  }
  const terms = ["6 Months", "12 Months"]

  async function sendMsg(e: any) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const firstName = form.get("firstName")
    const lastName = form.get("lastName")
    const email = form.get("email")
    const phone = form.get("phone")
    const duration = form.get("duration")
    const day = form.get("day")
    const startingTime = form.get("startingTime")
    const term = form.get("term")
    const message = form.get("message")

    if (!firstName) {
      return setErrorMsg("Please enter a first name.")
    }

    if (!lastName) {
      return setErrorMsg("Please enter a last name.")
    }

    if (!email) {
      return setErrorMsg("Please enter an email address.")
    }

    if (!phone) {
      return setErrorMsg("Please enter a phone number.")
    }

    await sendEmail(
      cfd.fields.title,
      `
      First name: ${firstName}
      Last name: ${lastName}
      Email: ${email}
      Phone: ${phone}
      Duration: ${duration}
      Day: ${day}
      Starting time: ${startingTime}
      Term: ${term}
      Message:
      ${message}
      `
    )

    setSuccessMsg("Your application has been sent!")
    setErrorMsg("")
  }

  return (
    <div className="subscription-form">
      <div className="image">
        <Image src={imageUrl(cfd.fields.image.fields.file.url)} fill={true} alt=""/>
      </div>
      <div className="text">
        <div className="inner">
          <h2>{cfd.fields.title}</h2>
          <form onSubmit={sendMsg}>
            <label>First name:</label>
            <input type="text" name="firstName" autoComplete="given-name" placeholder="First Name"/>
            <label>Last name:</label>
            <input type="text" name="lastName" autoComplete="family-name" placeholder="Last Name"/>
            <label>E-mail address:</label>
            <input type="email" name="email" className="email" autoComplete="email" placeholder="Email"/>
            <label>Phone number:</label>
            <input type="tel" name="phone" className="phone" autoComplete="tel" placeholder="Phone Number"/>
            <label>Duration:</label>
            <select name="duration">
              {duration.map((duration, index) => (
                <option key={index} value={duration}>{duration}</option>
              ))}
            </select>
            <label>Day:</label>
            <select name="day">
              {days.map((day, index) => (
                <option key={index} value={day}>{day}</option>
              ))}
            </select>
            <label>Starting time:</label>
            <select name="startingTime">
              {hours.map((hour, index) => (
                <option key={index} value={hour}>{hour}</option>
              ))}
            </select>
            <label>Term:</label>
            <select name="term">
              {terms.map((term, index) => (
                <option key={index} value={term}>{term}</option>
              ))}
              </select>
            <label>Message:</label>
            <textarea name="message"></textarea>
            {successMsg && (
              <p className="success-msg">{successMsg}</p>
            )}
            {errorMsg && (
              <p className="error-msg">{errorMsg}</p>
            )}
            <div>
              <button type="submit">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
