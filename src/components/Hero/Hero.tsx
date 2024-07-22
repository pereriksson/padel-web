import Image from "next/image";
import imageUrl from "@/utils/imageUrl";

type HeroProps = {
  cfd: any;
}

export default function Hero(props: HeroProps) {
  const {cfd} = props

  return (
    <div className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__inner__left">
            <h1>{cfd.fields.headline}</h1>
            <h2>{cfd.fields.subHeadline}</h2>
          </div>
          <div className="hero__inner__right">
            <Image src={imageUrl(cfd.fields.image.fields.file.url)} fill={true} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}
