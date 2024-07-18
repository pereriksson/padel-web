import Image from "next/image";

export default function Ribbon() {
  return (
    <div className="ribbon">
      <span>INCLUDES NEW FRIENDS AND MORE SMILES</span>
      <Image src="/images/racket.svg" width="20" height="20" alt=""/>
      <span>THE WORLD’S FASTEST GROWING SPORT IS COMING TO LONG ISLAND</span>
      <Image src="/images/racket.svg" width="20" height="20" alt=""/>
      <span>IT´S NOT A SPORT, IT´S AN ADDICTION</span>
    </div>
  )
}
