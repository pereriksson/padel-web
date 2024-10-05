"use client"
import {useCallback, useEffect, useState} from "react";
import {loadStripe} from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import {bool} from "prop-types";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const CheckoutForm = () => {
  const [error, setError] = useState<boolean>(false)

  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/create-checkout-session`, {
      method: "POST",
    })
      .then((res) => {
        if (!res.ok) {
          setError(true)
        }

        return res.json()
      })
      .then((data) => data.clientSecret);
  }, []);

  const options = {fetchClientSecret};

  if (error) {
    return (
      <div className="stripe-error">
        <h1>An error occurred</h1>
        <p>Please try again.</p>
      </div>
    )
  }

  return (
    <div className="stripe-checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}

export default CheckoutForm
