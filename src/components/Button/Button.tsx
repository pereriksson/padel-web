"use client"
import {useRouter} from "next/navigation";

type ButtonProps = {
  cfd: any;
}

export default function Button(props: ButtonProps) {
  const router = useRouter()
  const {cfd} = props

  const onSubmit = (e) => {
    e.preventDefault()
    router.push(cfd.fields.link)
  }

  return (
    <div className="button">
      <form onSubmit={onSubmit}>
        <button type="submit">{cfd.fields.label}</button>
      </form>
    </div>
  )
}
