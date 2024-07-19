"use client"
import {subscribeUserToList} from "@/apis/api";
import {useRef, useState} from "react";

export default function Newsletter() {
  const email = useRef<HTMLInputElement>(null)
  const [subscribed, setSubscribed] = useState<boolean>(false)

  async function subscribe(e: any) {
    e.preventDefault()
    if (!email.current || !email.current.value) return
    await subscribeUserToList(email.current.value)
    setSubscribed(true)
  }

  return (
    <div className="newsletter">
      <div className="left">
        Padel&
      </div>
      <div className="middle">
        <h2>stay in the know</h2>
        <p>Enter your email address to receive news and updates from Padel&.</p>
        {subscribed && (
          <p>You have now been subscribed!</p>
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
