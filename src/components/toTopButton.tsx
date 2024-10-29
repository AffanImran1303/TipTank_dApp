'use client'
import "/public/globals.css";
import { useEffect, useState } from "react";
const ToTop=()=>{

    const [backToTop,setBackToTop]=useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>1000){
                setBackToTop(true);
            }
            else{
                setBackToTop(false);
            }
        });
    },[]);

    const ScrollTop=()=>{
        window.scrollTo({top:0,behavior:"smooth"});
    }
    return(
        <>
        <div>
            {backToTop &&(
        <button className="border-none rounded-full scrollToTopButton mb-2 animate-bounce delay-100" onClick={ScrollTop}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
</svg>
        </button>
            )}
        </div>
        </>
    )
}
export default ToTop;
