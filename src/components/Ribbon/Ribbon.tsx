import Image from "next/image";
import classNames from "classnames";
import {Fragment} from "react";
import Marquee from "react-fast-marquee";

type RibbonProps = {
  cfd: any;
}

export default function Ribbon(props: RibbonProps) {
  const {cfd} = props

  if (!cfd) return null

  const containerClasses = classNames(
    "ribbon",
    cfd.fields.theme
  )
  let sentences = cfd.fields.sentences.split("\n")
  // Fix for larger displays
  sentences = [
    ...sentences,
    ...sentences
  ]
  return (
    <div className={containerClasses}>
      <Marquee>
        {sentences.map((sentence: string[], index: number) => {
          return (
            <Fragment key={index}>
              <span key={index}>{sentence}</span>
              <Image src="/images/racket.svg" width="20" height="20" className={cfd.fields.theme} alt=""/>
            </Fragment>
          )
        })}
      </Marquee>
    </div>
  )
}
