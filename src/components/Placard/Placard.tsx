import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

type PlacardProps = {
  cfd: any;
}

export default function Placard(props: PlacardProps) {
  const {cfd} = props

  return (
    <div className="container">
      <div className="placard">
        <h2>{cfd.fields.headline}</h2>
        {documentToReactComponents(cfd.fields.paragraph)}
      </div>
    </div>
  )
}
