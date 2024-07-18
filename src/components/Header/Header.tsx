import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <div className="header__inner">
        <div className="header__inner__logo">
          <Link href="/">
            <Image src="/images/logo.png" width="143" height="68" alt="Logo"/>
          </Link>
        </div>
        <div className="header__links">
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/membership">Membership</Link>
          <Link href="/for-companies">For Companies</Link>
          <Link href="/what-is-padel">What is Padel</Link>
        </div>
        <div className="header__inner__button">
          <button>Book here</button>
        </div>
      </div>
    </div>
  )
}
