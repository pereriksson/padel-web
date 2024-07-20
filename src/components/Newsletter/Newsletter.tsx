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

export default function Newsletter() {
  const email = useRef<HTMLInputElement>(null)
  const [msg, setMsg] = useState<string>("")

  async function subscribe(e: any) {
    e.preventDefault()
    if (!email.current || !email.current.value) return

    if (!validateEmail(email.current.value)) {
      setMsg("Please enter a valid email address.")
      return
    }

    await subscribeUserToList(email.current.value)
    setMsg("You have now been subscribed!")
  }

  return (
    <div className="newsletter">
      <div className="left">
        Padel&
      </div>
      <div className="middle">
        <h2>stay in the know</h2>
        <p>Enter your email address to receive news and updates from Padel&.</p>
        {msg && (
          <p>{msg}</p>
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
