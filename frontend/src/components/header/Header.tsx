'use client';

import mp_logo_white from "/public/mp_logo_white.svg";
import Image from "next/image";
import {HomeIcon, PhotoIcon, CameraIcon, UserIcon, BookOpenIcon, Bars3Icon} from '@heroicons/react/24/outline'

import Link from "next/link";
import {Fragment, useState} from "react";
import Drawer from "@/components/Drawer";
import HamburgerMenu from "./HamburgerMenu";


type HeaderIconProps = {
  children: React.ReactNode
}


export default function Header() {

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)

  return (
    <nav
      className="flex items-center justify-between bg-white flex-wrap border-b border-gray-300 sticky top-0 z-10">
      <div className="flex items-center flex-grow flex-shrink-0 text-gray-900 mr-6 pl-2">
        {/*<svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>*/}
        <Image className="m-2"
               priority
               src={mp_logo_white}
               alt="Mellowtech"
               height={32}
               width={32}
        />
        <span className="font-extralight text-base tracking-widest">MELLOWTECH</span>
      </div>
      <div className="md:hidden items-center">
        <HamburgerMenu/>
        {/*<button className="hover:bg-gray-100 rounded-full p-2 active:animate-ping" onClick={() => {setDrawerOpen(true)}}>*/}
        {/*  <Bars3Icon className="h-6 w-6 text-gray-900"/>*/}
        {/*</button>*/}
        {/*<Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>*/}
        {/*  <div></div>*/}
        {/*</Drawer>*/}
      </div>
      <div className="hidden md:flex items-center">
        <Link href="/" className="hover:bg-gray-100 rounded-full p-2 active:animate-ping">
          <HomeIcon className="h-6 w-6 text-gray-900"/>
        </Link>
        <Link href="/photo" className="hover:bg-gray-100 rounded-full p-2 active:animate-ping">
          <PhotoIcon className="h-6 w-6 text-gray-900"/>
        </Link>
        <button className="hover:bg-gray-100 rounded-full p-2 active:animate-ping">
          <BookOpenIcon className="h-6 w-6 text-gray-900"/>
        </button>
        <button className="hover:bg-gray-100 rounded-full p-2 active:animate-ping">
          <CameraIcon className="h-6 w-6 text-gray-900"/>
        </button>
        <button className="hover:bg-gray-100 rounded-full p-2 active:animate-ping">
          <UserIcon className="h-6 w-6 text-gray-900"/>
        </button>
      </div>
      {/*<div className="block lg:hidden">*/}
      {/*  <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">*/}
      {/*    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>*/}
      {/*  </button>*/}
      {/*</div>*/}
      {/*<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">*/}
      {/*  <div className="text-sm lg:flex-grow">*/}
      {/*    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">*/}
      {/*      Docs*/}
      {/*    </a>*/}
      {/*    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">*/}
      {/*      Examples*/}
      {/*    </a>*/}
      {/*    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">*/}
      {/*      Blog*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </nav>
  )
}