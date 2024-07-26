import ContentfulEntry from "@/components/ContentfulEntry/ContentfulEntry";

type SubscriptionTermProps ={
  cfd: any
}

export default function SubscriptionTerm({cfd}: SubscriptionTermProps) {
  return (
    <div className="subscription-term">
      <h2>{cfd.fields.title}</h2>
      <div className="subscription-term__cards">
        {cfd.fields.cards && cfd.fields.cards.map((card: any, index: number) => (
          <ContentfulEntry key={index} c={card}/>
        ))}
      </div>
    </div>
  )
}
