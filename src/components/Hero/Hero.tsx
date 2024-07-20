import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__inner__left">
            <h1>Padel is coming to Syosset</h1>
            <h2>Long Island</h2>
          </div>
          <div className="hero__inner__right">
            <Image src="/images/shutterstock_2236772221.jpg" fill={true} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}
