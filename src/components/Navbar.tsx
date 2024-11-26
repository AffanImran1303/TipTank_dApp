'use client';
import "/public/globals.css";
import Link from 'next/link';
import React from 'react';
import Button from "./Button";
import { NAVBAR_LINKS } from "@/constants";

const Navbar = () => {
  const scrollToAbout=(AboutId:string)=>{
    const e= document.getElementById(AboutId);
    e?.scrollIntoView({behavior:"smooth"});
  }

  return (
    <>
    <div className="flex justify-center">
        <div className="navbar sm:w-5/6 border-[#0c4727] border-1 rounded rounded-xl mt-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-[#16583c] text-white rounded-box z-[1] mt-3 w-52 p-4 shadow">
        {NAVBAR_LINKS.map((item,key)=>(
          <Link href={item.href} key={item.key}>{item.label}</Link>
        ))}
      </ul>
    </div>
    <Link href="/" className="text-2xl font-semibold sm:text-3xl league-spartan transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:text-[#6ead3d]">tiptank</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold space-x-8">
    {NAVBAR_LINKS.map((item,key)=>(
          <Link href={item.href} key={item.key}  className="transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:text-[#6ead3d]">{item.label}</Link>
        ))}
    </ul>
  </div>
  <div className="navbar-end">
    <Button title={"Connect"} icon={'/assets/walleticon.png'}/>
  </div>
</div>
</div>
    </>
  )
}

export default Navbar
