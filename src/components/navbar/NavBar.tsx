'use client';

import Link from "next/link";
import "./navbar.css";
import { usePathname } from 'next/navigation'
import Dropdown from "../dropdown/Dropdown";
import logo from "@/static/logo.png"

interface NavItem {
  id: number
  text: string
  submenu?: NavItem[]
  url: string
}

export default function NavBar() {
  const pathname = usePathname()

  const navItems = [
    { id: 1, text: 'Home', url: '/' },
    {
      id: 2, text: 'DIY', url: '/diy',
      submenu: [
        { id: 2.1, text: 'Crafts', url: '/diy/crafts' },
        { id: 2.3, text: 'Holiday', url: '/diy/holiday' },
        { id: 2.2, text: 'Home', url: '/diy/home' },
      ]
    },
    { id: 3, text: 'About', url: '/about' },
  ]

  return (
    <header>
      <link rel="shortcut icon" href="/images/logo.png" />
      <title> space-cadet-hayes</title>
      <nav className="header-links contents font-semibold text-base lg:text-lg block w-full h-fit">
        <ul>
          <img src={logo.src} className="h-10 m-3 inline" />
          {
            navItems.map((navItem, i) => (
              navItem.submenu ?
                <Dropdown
                  key={`${i}-${navItem.text}`}
                  menuTitle={navItem.text}
                  submenu={navItem.submenu}
                  url={navItem.url}
                  pathname={pathname}
                />
                :
                <Link
                  key={navItem.id}
                  className={`p-3 link ${pathname === navItem.url ? 'active' : ''}`}
                  href={navItem.url}>
                  {navItem.text}
                </Link>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}


