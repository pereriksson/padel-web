import Image from "next/image";
import classNames from "classnames";
import {Fragment} from "react";

type RibbonProps = {
  theme: "light" | "dark",
  sentences: string[]
}

export default function Ribbon(props: RibbonProps) {
  const {theme, sentences} = props
  const containerClasses = classNames(
    "ribbon",
    theme
  )
  return (
    <div className={containerClasses}>
      {sentences.map((sentence, index) => {
        return (
          <Fragment>
            <span key={index}>INCLUDES NEW FRIENDS AND MORE SMILES</span>
            {index < sentences.length - 1 && (
              <Image src="/images/racket.svg" width="20" height="20" className={theme} alt=""/>
            )}
          </Fragment>
        )
      })}
    </div>
  )
}
