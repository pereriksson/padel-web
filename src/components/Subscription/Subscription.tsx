import ContentfulEntry from "@/components/ContentfulEntry/ContentfulEntry";

type SubscriptionProps = {
  cfd: any
}

export default function Subscription(props: SubscriptionProps) {
  const {cfd} = props
  return (
    <div className="subscription">
      {cfd.fields.terms.map((t: any, index: number) => (
        <ContentfulEntry key={index} c={t}/>
      ))}
    </div>
  )
}
