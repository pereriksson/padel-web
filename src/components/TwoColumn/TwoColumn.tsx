import Image from "next/image";
import Link from "next/link";
import {Fragment} from "react";
import imageUrl from "@/utils/imageUrl";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import classNames from "classnames";

type TwoColumnProps = {
  cfd: any;
}

export default function TwoColumn(props: TwoColumnProps) {
  const {cfd} = props
  const theme = cfd.fields.theme
  const imagePart = (
    <div className="image">
      <Image src={imageUrl(cfd.fields.image.fields.file.url)} fill={true} alt=""/>
    </div>
  )
  const textPart = (
    <div className="text">
      <div className="inner">
        <h3>{cfd.fields.headline}</h3>
        {documentToReactComponents(cfd.fields.paragraph)}
        {cfd.fields.buttonLink && (
          <Link className="button" href={cfd.fields.buttonLink}>Apply today</Link>
        )}
      </div>
    </div>
  )
  const classes = classNames(
    "two-column",
    theme
  )
  return (
    <div className="container">
      <div className={classes}>
        {cfd.fields.imagePosition === "left" ? (
          <Fragment>
            {imagePart}
            {textPart}
          </Fragment>
        ) : (
          <Fragment>
            {textPart}
            {imagePart}
          </Fragment>
        )}
      </div>
    </div>
  )
}
