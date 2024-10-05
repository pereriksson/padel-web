"use client"
import {Fragment, useCallback, useEffect, useState} from "react";
import {loadStripe} from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import {useRouter} from "next/navigation";

const stripePromise = loadStripe("pk_test_51NZyJQEzfGwnpdqxGWlUkSCOpYuft2ezITf259E0J46ea7qPmknhTnIT0zlbekscRLhNzQvcIcpYVLOtRECwC1SN00qrmspJiL");

const Return = () => {
  const router = useRouter()
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get('session_id');

    fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/session-status?session_id=${sessionId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error()
        }

        return res.json()
      })
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      })
      .catch((err) => {
        setError(true)
      })
  }, []);

  if (error) {
    return (
      <div className="stripe-success">
        <h1>An error occurred</h1>
        <p>Please try the operation again.</p>
      </div>
    )
  }

  if (status === 'open') {
    router.push("/membership-signup")
  }

  if (status === 'complete') {
    return (
      <div className="stripe-success">
        <h1>Thank you!</h1>
        <p>We appreciate you becoming a member with us!</p>
        <p>A confirmation email will be sent to {customerEmail}.</p>
        <p>If you have any questions, please email <a target="_blank" href="mailto:hello@padeland.us">hello@padeland.us</a>.</p>
      </div>
    )
  }

  return null;
}

export default Return
