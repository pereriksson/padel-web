import {Fragment} from "react";
import Image from "next/image";
import imageUrl from "@/utils/imageUrl";

type BulletinBoardProps = {
  cfd: any;
}

export default function BulletinBoard(props: BulletinBoardProps) {
  const {cfd} = props
  return (
    <div className="bulletin-board">
      <div className="container">
        <h3>{cfd.fields.headline}</h3>
        <h4>{cfd.fields.subHeadline}</h4>
        <div className="images">
          <div className="left">
            <Image src={imageUrl(cfd.fields.leftImage.fields.file.url)} fill={true} alt=""/>
          </div>
          <div className="right">
            <Image src={imageUrl(cfd.fields.rightImage.fields.file.url)} fill={true} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}
