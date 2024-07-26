import classNames from "classnames";

type SubscriptionTermCardProps = {
  cfd: any
}

export default function SubscriptionTermCard({cfd}: SubscriptionTermCardProps) {
  const classes = classNames(
    "subscription-term-card",
    cfd.fields.theme
  )
  return (
    <div className={classes}>
      <div className="subscription-term-card__left">
        <h3>{cfd.fields.title}</h3>
        <span className="subscription-term-card__left__label">{cfd.fields.label}</span>
      </div>
      <div className="subscription-term-card__right">
        <div className="price">
          {cfd.fields.price}
        </div>
      </div>
    </div>
  )
}
