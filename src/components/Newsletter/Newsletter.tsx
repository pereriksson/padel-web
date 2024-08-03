"use client"
import {subscribeUserToList} from "@/apis/api";
import {useRef, useState} from "react";

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

type NewsletterProps = {
  cfd: any;
}

export default function Newsletter(props: NewsletterProps) {
  const {cfd} = props
  const email = useRef<HTMLInputElement>(null)
  const [successMsg, setSuccessMsg] = useState<string>("")
  const [errorMsg, setErrorMsg] = useState<string>("")

  async function subscribe(e: any) {
    e.preventDefault()
    if (!email.current || !email.current.value) return

    if (!validateEmail(email.current.value)) {
      setSuccessMsg("Please enter a valid email address.")
      return
    }

    window.grecaptcha.ready(function() {
      window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {action: 'submit'}).then(async function (token: string) {
        if (email.current) {
          const success = await subscribeUserToList(email.current.value, token)

          if (success) {
            setSuccessMsg("You have now been subscribed!")
            setErrorMsg("")
          } else {
            setSuccessMsg("")
            setErrorMsg("You could not be subscribed. Please contact us at hello@padeland.com.")
          }
        }
      })
    })
  }

  return (
    <div className="newsletter">
      <div className="left">
        Padel&
      </div>
      <div className="middle">
        <h2>{cfd.fields.title}</h2>
        <p>{cfd.fields.paragraph}</p>
        {successMsg && (
          <p className="success-msg">{successMsg}</p>
        )}
        {errorMsg && (
          <p className="error-msg">{errorMsg}</p>
        )}
        <form>
          <input name="email" type="email" ref={email} placeholder="Email Address"/>
          <button type="submit" onClick={subscribe}>Submit</button>
        </form>
      </div>
      <div className="right">
        Padel&
      </div>
    </div>
  )
}
