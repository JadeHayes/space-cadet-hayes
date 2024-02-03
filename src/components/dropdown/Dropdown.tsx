import { Menu } from '@headlessui/react'
import Link from 'next/link'
import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

interface DropdownProps {
  menuTitle: string
  submenu: {}[]
  pathname: string
  url: string
}

export default function Dropdown({ menuTitle, submenu, url, pathname }: DropdownProps) {
  return (
    <Menu>
      <Menu.Button className='inline-flex active:link p-3'>
        {menuTitle}
        <ChevronDownIcon
          className="m-auto h-5 w-5 hover:text-violet-100"
          aria-hidden="true"
        />
      </Menu.Button>
      <Menu.Items className="absolute inset-x-2/4	 px-2 py-2 text-sm shadow-sm w-min rounded-sm p-3">
        {submenu.map((item: any) => (
          <Menu.Item key={menuTitle}>
            <div className="m-1">
              <Link key={item.id} className={`${pathname === item.url ? 'active' : ''} link`} href={item.url}>
                {item.text}
              </Link>
            </div>
          </Menu.Item>
        ))
        }
      </Menu.Items>
    </Menu>
  )
}