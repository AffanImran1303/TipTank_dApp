import { animate, motion, useMotionValue } from "framer-motion";
import Cards from "./Cards";
import React, { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import "/public/globals.css";
// import useCryptoIcons from "./CryptoIcons";

interface Creator{
    image:string;
    text:string;
    currencySymbol:string;
}

const Slider:React.FC=()=>{

    const creators:Creator[]=[
        {image:"/images/creator1.jpg",text:"Sam got 0.2",currencySymbol:"SOL"},
        {image:"/images/creator2.jpg",text:"Alexa got 1",currencySymbol:"SUI"},
        {image:"/images/creator3.jpg",text:"Taylor got 10",currencySymbol:"CHZ"},
        {image:"/images/creator4.jpg",text:"Jordan got 25",currencySymbol:"LINK"},
        {image:"/images/creator5.jpg",text:"Alice got 1",currencySymbol:"DAI"},
        {image:"/images/creator6.jpg",text:"Jack got 1",currencySymbol:"SEI"},
        {image:"/images/creator7.jpg",text:"Walsh got 1",currencySymbol:"GAS"},
    ]
    // const cryptoIcons=useCryptoIcons(creators.map(creator=>creator.currency));
    return(
        <>
        <div className="py-8">
            <div className="absolute left-0 flex gap-4">
                {creators.map((creator,idx)=>(
                    <Cards image={creator.image} key={idx} text={creator.text} currencySymbol={creator.currencySymbol}/>
                ))}
            </div>



            {/* <div className="item animate-delay-[calc(30s_/8_*_(8-1)*-1)]">
                <Cards/>
            </div>
            <div className="item animate-delay-[calc(30s_/8_*_(8-2)*-1)]">
                <Cards/>
            </div>
            <div className="item animate-delay-[calc(30s_/8_*_(8-3)*-1)]">
                <Cards/>
            </div>
            <div className="item animate-delay-[calc(30s_/8_*_(8-4)*-1)]">
                <Cards/>
            </div> */}





        </div>
        </>

    )
    // const FAST_DURATION=25;
    // const SLOW_DURATION=75;

    // const [duration,setDuration]=useState(FAST_DURATION);

    // let [ref,{width}]=useMeasure();
    // const xTranslate=useMotionValue(0);

    // const [mustFinish,setMustFinish]=useState(false);
    // const [rerender,setRerender]=useState(false);

    // useEffect(()=>{
    //     let controls;
    //     let finalPosition=-width/2-8;

    //     if(mustFinish){
    //         controls=animate(xTranslate,[xTranslate.get(),finalPosition],{
    //             ease:"linear",
    //             duration:duration*(1- xTranslate.get()/finalPosition),
    //             onComplete:()=>{
    //                 setMustFinish(false);
    //                 setRerender(!rerender);
    //             }
    //         })
    //     }
    //     else{
    //         controls=animate(xTranslate,[0,finalPosition],{
    //             ease:"linear",
    //             duration:duration,
    //             repeat:Infinity,
    //             repeatType:"loop",
    //             repeatDelay:0,
    //         })
    //     }


    //     controls=animate(xTranslate,[0,finalPosition],{
    //         ease:"linear",
    //         duration:25,
    //         repeat:Infinity,
    //         repeatType:"loop",
    //         repeatDelay:0,
    //     });
    //     return controls.stop;
    // },[xTranslate,width,duration,rerender]);

    // return(
    //     <>
    //     <div className="py-8">
    //         <motion.div
    //         className="relative left-0 flex gap-4" ref={ref} style={{x:xTranslate}}>
    //             <Cards/>
    //             <Cards/>
    //             <Cards/>
    //             <Cards/>
    //             <Cards/>
    //             <Cards/>
    //             <Cards/>
    //             <Cards/>
    //             <Cards/>
    //             <Cards/>
    //         </motion.div>
    //         </div>
    //     </>
    // )
}
export default Slider;