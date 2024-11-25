import React from 'react'
import Image from 'next/image';

interface ButtonProps{
    title:string;
    icon:string;
}


const Button = ({title,icon}:ButtonProps) => {
    return(
        <>
        <div className="btn w-max border-0 text-[#fffdff] bg-[#6ead3d] transition ease-in-out delay-450 hover:bg-[#0c4727] hover:scale-110">
        {title}
        <Image src={icon} alt={title} width={24} height={24}/>
        </div>
        </>
    )
}

export default Button