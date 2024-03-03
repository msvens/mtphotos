import {Popover, Transition} from '@headlessui/react'
import {Bars3Icon} from '@heroicons/react/24/outline'
import {HomeIcon, PhotoIcon, CameraIcon, UserIcon, BookOpenIcon} from '@heroicons/react/20/solid'
import React, {Fragment} from "react";
import Link from "next/link";

type MenuItemProp = {
  href: string
  text: string
  icon: React.ReactElement<any>
}

const menuItems: MenuItemProp[] = [
  {href: '/', text: 'Home', icon: <HomeIcon/>},
  {href: '/photo', text: 'Photos', icon: <PhotoIcon/>},
  {href: '/album', text: 'Albums', icon: <BookOpenIcon/>},
  {href: '/camera', text: 'Cameras', icon: <CameraIcon/>},
  {href: '/guest', text: 'Guest', icon: <UserIcon/>},
]


function BarsButton() {
  return (
    <button className="hover:bg-gray-100 rounded-full p-2 active:animate-ping">
      <Bars3Icon className="h-6 w-6 text-gray-900"/>
    </button>
  )
}

function MenuItem({href, text, icon}: MenuItemProp) {
  
  const StyledIcon = () => {
    return React.cloneElement(icon, {className: `${icon.props.className} ${"h-4 w-4 ml-2 mr-6"}`})
  }
  
  return (
    <Popover.Button className="flex w-full items-center" as={Link} href={href}><StyledIcon/> {text}
    </Popover.Button>
  )
}

export default function HamburgerMenu() {
  return (
    <Popover>
      <Popover.Button className="focus:border-none outline-0 hover:bg-gray-100 rounded-full p-2 active:animate-ping">
        <Bars3Icon className="h-6 w-6 text-gray-900"/>
      </Popover.Button>
      <Popover.Overlay className="fixed inset-0 bg-black opacity-20" />
      <Transition
        as={Fragment}
        enter="transition ease-in duration-300 transform"
        enterFrom="translate-x-full opacity-0"
        enterTo="translate-x-0 opacity-100"
        leave="transition ease-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
        >
        <div className="fixed right-0  top-0 h-screen w-2/4 bg-white shadow ml-2">
          <Popover.Panel className="grid grid-cols-1 m-2">
            {menuItems.map((mi,key) => (
              <MenuItem key={key} href={mi.href} text={mi.text} icon={mi.icon}/>
            ))}
              {/*<Link href="/">home</Link>*/}
              {/*<Popover.Button as={Link} href="/photo">Photos</Popover.Button>*/}
              {/*<a href="/analytics">Analytics</a>*/}
              {/*<a href="/engagement">Engagement</a>*/}
              {/*<a href="/security">Security</a>*/}
              {/*<a href="/integrations">Integrations</a>*/}
          </Popover.Panel>
        </div>
        
      </Transition>
    </Popover>
  )
}