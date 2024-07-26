"use client"
import Image from "next/image";
import Link from "next/link";
import React, {MouseEventHandler, useState} from "react";
import classNames from "classnames";
import OutsideClickHandler from 'react-outside-click-handler';
import {Menu, MenuItem as MUIMenuItem} from "@mui/material";
import {useRouter} from "next/navigation";

type MenuItem = {
  href: string
  label: string
  children?: MenuItem[]
}

export default function Header() {
  const [showDrawer, setShowDrawer] = useState<boolean>(false)
  const router = useRouter()

  const drawerClasses = classNames({
    "header__drawer__drawer": true,
    "visible": showDrawer
  })

  function toggleDrawer() {
    setShowDrawer((prev) => !prev)
  }

  const links: MenuItem[] = [
    {
      href: "/contact-us",
      label: "Contact Us"
    },
    {
      href: "/membership",
      label: "Membership"
    },
    {
      href: "/activities",
      label: "Activities",
      children: [
        {
          href: "/subscription",
          label: "Subscription"
        }
      ]
    },
    {
      href: "/for-companies",
      label: "For Companies"
    },
    {
      href: "/what-is-padel",
      label: "What is Padel"
    }
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
            {links.map((item, index) => (
              <MenuItem key={index} item={item}/>
            ))}
          </div>
          <div className="header__links__right">
            <div className="header__inner__button">
              <button onClick={() => router.push("/booking")}>Book here</button>
            </div>
            <button className="header__inner__mobile-menu" onClick={toggleDrawer}>
              <div className="segment"></div>
              <div className="segment"></div>
              <div className="segment"></div>
            </button>
          </div>
        </div>
      </div>
      <div className="header__drawer">
        <OutsideClickHandler onOutsideClick={() => setShowDrawer(false)}>
          <div className={drawerClasses}>
            <div className="header__drawer__drawer__inner">
              <menu>
                {links.map((item, index) => (
                  <li key={index}>
                    <MobileMenuItem key={index} item={item} setShowDrawer={setShowDrawer}/>
                  </li>
                ))}
              </menu>
            </div>
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  )
}

type MobileMenuItemProps = {
  setShowDrawer: (value: boolean) => void,
  item: MenuItem
}

function MobileMenuItem(props: MobileMenuItemProps) {
  const {setShowDrawer, item} = props

  if (item.children) {
    return item.children.map((child: MenuItem, index: number) => (
      <Link key={index} onClick={() => setShowDrawer(false)} href={child.href}>{child.label}</Link>
    ))
  }

  return (
    <Link onClick={() => setShowDrawer(false)} href={item.href}>{item.label}</Link>
  )
}

type MenuItemProps = {
  item: MenuItem
}

function MenuItem(props: MenuItemProps) {
  const {item} = props
  const router = useRouter()
  const [open, setOpen] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event: any) => {
    setOpen(true)
    setAnchorEl(event.currentTarget)
  }

  if (!item.children) {
    return (
      <div className="header__links__link">
        <Link href={item.href}>{item.label}</Link>
      </div>
    )
  }

  return (
    <div className="header__links__link">
      <Link
        href="#"
        onClick={handleClick}
      >{item.label}</Link>
      {item.children && (
        <Menu
          open={open}
          onClose={() => setOpen(false)}
          anchorEl={anchorEl}
        >
          {item.children.map((l, index) => (
            <MUIMenuItem key={index} onClick={() => router.push(l.href)}>{l.label}</MUIMenuItem>
          ))}
        </Menu>
      )}
    </div>
  )
}
