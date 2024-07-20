import Image from "next/image";
import Link from "next/link";
import {Fragment} from "react";

type TwoColumnProps = {
  image: string;
  imagePosition: "left" | "right";
  headline: string;
  paragraph: string;
  buttonLink?: string;
}

export default function TwoColumn(props: TwoColumnProps) {
  const {image, imagePosition, headline, paragraph, buttonLink} = props
  const imagePart = (
    <div className="image">
      <Image src={image} fill={true} alt=""/>
    </div>
  )
  const textPart = (
    <div className="text">
      <div className="inner">
        <h3>{headline}</h3>
        <p>{paragraph}</p>
        {buttonLink && (
          <Link href={buttonLink}>Apply today</Link>
        )}
      </div>
    </div>
  )
  return (
    <div className="container">
      <div className="two-column">
        {imagePosition === "left" ? (
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
