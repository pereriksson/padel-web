import {documentToReactComponents} from "@contentful/rich-text-react-renderer";

type TwoCardsProps = {
  cfd: any;
}

export default function TwoCards(props: TwoCardsProps) {
  const {cfd} = props

  return (
    <div className="two-cards">
      <div className="container">
        <h2>{cfd.fields.headline}</h2>
        {documentToReactComponents(cfd.fields.firstParagraph)}
        <div className="cards">
          <div className="card left-card">
            <div className="inner">
              {documentToReactComponents(cfd.fields.leftCard)}
            </div>
          </div>
          <div className="card right-card">
            <div className="inner">
              {documentToReactComponents(cfd.fields.rightCard)}
            </div>
          </div>
        </div>
        {documentToReactComponents(cfd.fields.secondParagraph)}
      </div>
    </div>
  )
}
