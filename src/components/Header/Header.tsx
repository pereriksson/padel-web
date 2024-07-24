"use client"
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import classNames from "classnames";
import OutsideClickHandler from 'react-outside-click-handler';

export default function Header() {
  const [showDrawer, setShowDrawer] = useState<boolean>(false)

  const drawerClasses = classNames({
    "header__drawer": true,
    "visible": showDrawer
  })

  function toggleDrawer() {
    setShowDrawer((prev) => !prev)
  }

  const links = [
    ["/contact-us", "Contact Us"],
    ["/membership", "Membership"],
    ["/for-companies", "For Companies"],
    ["/what-is-padel", "What is Padel"]
  ]

  return (
    <div className="header">
      <div className="header__inner">
        <div className="links">
          <div className="header__inner__logo">
            <Link href="/">
              <Image src="/images/logo.png" fill={true} alt="Logo"/>
            </Link>
          </div>
          <div className="header__links">
            {links.map((l, index) => (
              <Link key={index} href={l[0]}>{l[1]}</Link>
            ))}
          </div>
          <div className="header__inner__button">
            <button>Book here</button>
          </div>
          <div>
            <button className="header__inner__mobile-menu" onClick={toggleDrawer}>
              <div className="segment"></div>
              <div className="segment"></div>
              <div className="segment"></div>
            </button>
          </div>
        </div>
      </div>
      <OutsideClickHandler onOutsideClick={() => setShowDrawer(false)}>
        <div className={drawerClasses}>
          <menu>
            {links.map((l, index) => (
              <li>
                <Link key={index} onClick={() => setShowDrawer(false)} href={l[0]}>{l[1]}</Link>
              </li>
            ))}
          </menu>
        </div>
      </OutsideClickHandler>
    </div>
  )
}
