'use client';

import Link from "next/link";
import "./navbar.css";
import { useState } from "react";

interface NavItem {
    id: number
    text: string
    submenu?: NavItem[]
    url: string
}

export default function NavBar() {
    const [isExpanded, setExpanded] = useState(false)

    const toggle = () => {
        setExpanded(value => !value)
    }

  const navItems = [
    { id: 1, text: 'Home', url: '/' },
    { id: 2, text: 'DIY', url: '/diy',
    submenu: [
        {id: 2.1, text: 'Crafts', url: '/diy/crafts'},
        {id: 2.2, text: 'Home', url: '/diy/home'},
        {id: 2.3, text: 'Holiday', url: '/diy/holiday'},
    ] },
    { id: 3, text: 'About', url: '/about' },
  ]

  return (
    <header>
            <nav>
                <ul>
                {
                    navItems.map(navItem => (
                        navItem.submenu ? 
                        <>
                            <button>{navItem.text}</button>
                            <Dropdown submenu={navItem.submenu}/>
                        </>
                        :
                        <Link key={navItem.id} className="p-3 link" href={navItem.url}>{navItem.text}</Link>
                    ))
                }
                </ul>
            </nav>
        </header>
        )
  }

  const Dropdown = ({ submenu }: { submenu: NavItem[] }) => (
    submenu?.map((item: NavItem) => (
      <Link key={item.id} className="p-3 link" href={item.url}>
        {item.text}
      </Link>
    ))
  )  

