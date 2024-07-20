import {Fragment} from "react";
import Image from "next/image";

type BulletinBoardProps = {
  headline: string;
  subHeadline: string;
  leftImage: string;
  rightImage: string;
}

export default function BulletinBoard(props: BulletinBoardProps) {
  const {headline, subHeadline, leftImage, rightImage} = props
  return (
    <div className="bulletin-board">
      <div className="container">
        <h3>{headline}</h3>
        <h4>{subHeadline}</h4>
        <div className="images">
          <div className="left">
            <Image src={leftImage} fill={true} alt=""/>
          </div>
          <div className="right">
            <Image src={rightImage} fill={true} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}
