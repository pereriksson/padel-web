import Image from "next/image";
import classNames from "classnames";
import {Fragment} from "react";

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
  const sentences = cfd.fields.sentences.split("\n")
  return (
    <div className={containerClasses}>
      {sentences.map((sentence: string[], index: number) => {
        return (
          <Fragment key={index}>
            <span key={index}>{sentence}</span>
            {index < sentences.length - 1 && (
              <Image src="/images/racket.svg" width="20" height="20" className={cfd.fields.theme} alt=""/>
            )}
          </Fragment>
        )
      })}
    </div>
  )
}
