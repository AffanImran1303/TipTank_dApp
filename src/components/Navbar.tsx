'use client';
import "/public/globals.css";
import Link from 'next/link';
import React from 'react';
import ConnectWallet from "./ConnectButton";

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
 <Link href="#AboutSection" className="hover:text-[#6ead3d]">About</Link>
      <Link href="#HowItWorksSection">How it Works?</Link>
      <Link href="#FeaturedCreatorsSection">Featured Creators</Link>
      <Link href="#FAQSection">FAQ</Link>
      </ul>
    </div>
    <Link href="/" className="text-2xl font-semibold sm:text-3xl league-spartan transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:text-[#6ead3d]">tiptank</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold space-x-8">
      <Link href="#AboutSection" className="transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:text-[#6ead3d]">About</Link>
      <Link href="#HowItWorksSection" className="transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:text-[#6ead3d]">How it Works?</Link>
      <Link href="#FeaturedCreatorsSection" className="transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:text-[#6ead3d]">Featured Creators</Link>
      <Link href="#FAQSection" className="transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:text-[#6ead3d]">FAQ</Link>
      {/* <li><a>How it Works?</a></li>
      <li><a>Featured Creators</a></li>
      <li><a>FAQ</a></li> */}
    </ul>
  </div>
  <div className="navbar-end">
    <ConnectWallet/>

  </div>
</div>
</div>
    </>
  )
}

export default Navbar



// const Navbar=()=>{
//   const scrollToAbout=()=>{
//     const element=document.getElementById('About');
//     if(element){
//       element.scrollIntoView({behavior:'smooth'});
//     }
//   };
//   const scrollToGiveATip=()=>{
//     const element=document.getElementById('GiveATip');
//     if(element){
//       element.scrollIntoView({behavior:'smooth'});
//     }
//   }
//     return(
//         <>
//         <div className="navbar rounded-3xl border-2 border-slate-900">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h8m-8 6h16" />
//         </svg>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//         <li><Link href={"/about"}>About</Link></li>
 
//         <li><Link href={"/tip"}>Give a Tip</Link></li>
//       </ul>
//     </div>
//     <Link href={"/"} className="btn btn-ghost">
//         <img src="/src/assets/tiptank_logo.png" className="h-[70%]"></img>
//     </Link>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//       {/* <li><button className="font-bold transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:btn-ghost duration-300" onClick={scrollToAbout}>About</button></li> */}

//       {/* <li><button className="font-bold transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:btn-ghost duration-300" onClick={scrollToGiveATip}>Give a Tip</button></li> */}
//     </ul>
//   </div>
//   <div className="navbar-end">
//     Connect
//     {/* <Wallet/> */}
//   </div>
// </div>
//         </>
//     )
//   };
// export default Navbar