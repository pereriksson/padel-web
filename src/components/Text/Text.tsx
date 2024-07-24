import {documentToReactComponents} from "@contentful/rich-text-react-renderer";

type TextProps = {
  cfd: any;
}

export default function Text(props: TextProps) {
  const {cfd} = props

  return (
    <div className="text-block">
      <h1>{cfd.fields.title}</h1>
      <div className="line"/>
      {documentToReactComponents(cfd.fields.text)}
    </div>
  )
}
