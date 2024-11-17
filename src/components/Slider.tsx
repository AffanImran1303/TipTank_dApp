import Cards from "./Cards";
import React from "react";
import "/public/globals.css";

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
    return(
        <>
        <div className="py-8 mt-8 marquee z-20">
            <div className="absolute left-0 flex gap-4 marquee-slider fadeout-horizontal z-20">
                {[...creators,...creators].map((creator,idx)=>(
                    <Cards image={creator.image} key={idx} text={creator.text} currencySymbol={creator.currencySymbol}/>
                ))}
            </div>
        </div>
        </>

    )
}
export default Slider;