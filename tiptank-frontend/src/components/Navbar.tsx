import { Link } from 'react-router-dom';
import {Wallet} from '../pages/Wallet';
import '/src/index.css';
// import {ConnectWallet} from "@thirdweb-dev/react";

const Navbar=()=>{

    return(
        <>
        <div className="navbar rounded-3xl border-2 border-slate-900">
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link to={"/about"}>About</Link></li>
 
        <li><Link to={"/tip"}>Give a Tip</Link></li>
      </ul>
    </div>
    <Link to={"/"} className="btn btn-ghost">
        <img src="/src/assets/tiptank_logo.png" className="h-[70%]"></img>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link className="font-bold transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:btn-ghost duration-300" to={''}>About</Link></li>

      <li><Link className="font-bold transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:btn-ghost duration-300" to={'/tip'}>Give a Tip</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Wallet/>
  </div>
</div>
        </>
    )
  };
export default Navbar