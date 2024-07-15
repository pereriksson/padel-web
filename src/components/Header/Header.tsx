import Image from "next/image";

export default function Header() {
  return (
    <div className="header">
      <div className="header__inner">
        <div className="header__inner__logo">
          <Image src="/images/logo.png" width="143" height="68" alt="Logo"/>
        </div>
        <div className="header__links">
          <a href="#">Contact Us</a>
          <a href="#">Membership</a>
          <a href="#">For Companies</a>
          <a href="#">What is Padel</a>
        </div>
        <div className="header__inner__button">
          <button>Book here</button>
        </div>
      </div>
    </div>
  )
}
