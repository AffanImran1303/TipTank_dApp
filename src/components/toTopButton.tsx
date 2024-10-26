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

        {/* <svg xmlns="https://img.icons8.com/external-others-inmotus-design/67/external-Top-keyboard-others-inmotus-design-2.png" viewBox="0 0 24 24" fill="#A8FF35"><path d="M3.29 15.71c.39.39 1.02.39 1.41 0l7.29-7.29 7.29 7.29a.996 .996 0 1 0 1.41-1.41l-7.98-8.01c-.2-.2-.45-.29-.71-.29s-.51.1-.71.29l-8 8a1 1 0 0 0 0 1.41Z"></path></svg> */}
        </button>
            )}
        </div>
        </>
    )

    // const [isVisible,setIsVisible]=useState(false);
    // const toggleVisibility=()=>{
    //     if(window.scrollY>300){
    //         setIsVisible(true);
    //     }
    //     else{
    //         setIsVisible(false);
    //     }
    // };
    // const scrollToTop=()=>{
    //     window.scrollTo({
    //         top:0,
    //         behavior:'smooth',
    //     });
    // }
    // useEffect(()=>{
    //     window.addEventListener('scroll',toggleVisibility);
    //     return()=>{
    //         window.removeEventListener('scroll',toggleVisibility);
    //     };
    // },[]);

    // return(
    //     <>
    //     {isVisible && (
    //         <div id="scrollTop" onClick={()=>scrollToTop()}
    //         className="rounded bg-white">
    //             Top
    //         </div>
    //     )}
    //     </>
    // )

}
export default ToTop;
