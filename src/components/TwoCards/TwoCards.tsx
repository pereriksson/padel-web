import {documentToReactComponents} from "@contentful/rich-text-react-renderer";

type TwoCardsProps = {
  cfd: any;
}

export default function TwoCards(props: TwoCardsProps) {
  const {cfd} = props

  return (
    <div className="two-cards">
      <h2>{cfd.fields.headline}</h2>
      {documentToReactComponents(cfd.fields.firstParagraph)}
      <div className="cards">
        <div className="card left-card">
          {documentToReactComponents(cfd.fields.leftCard)}
        </div>
        <div className="card right-card">
          {documentToReactComponents(cfd.fields.rightCard)}
        </div>
      </div>
      {documentToReactComponents(cfd.fields.secondParagraph)}
    </div>
  )
}
