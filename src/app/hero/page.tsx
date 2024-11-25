import React from 'react'
import Image from 'next/image';
import { motion } from "framer-motion";
import "/public/globals.css";
import GiveATipButton from "@/components/GiveATipButton";
import Slider from "@/components/Slider";
import Button from '@/components/Button';
const Hero = () => {
  return (
    <section
  className="hero h-96 w-full md:h-screen"
  style={{ backgroundImage: 'url("./images/circle-scatter-haikei1.svg")'}}>
  <div className="hero-content text-neutral-content text-center league-spartan z-10">
    <div className="max-w-screen">
      <h1 className="text-5xl font-bold sm:text-6xl md:text-8xl p-2">Your Rewards<span className="text-[#6ead3d]">,</span><br /> Their Motivation</h1>
      <p className="text-lg m-4 sm:text-2xl">
      Empower Creators with TipTank, Revolutionize Rewards with Decentralized Tipping.
      </p>
      <div className='m-2'>
      <Button title={'Give A Tip'} icon={'/assets/giveATipicon.png'}/>
      </div>
      {/* <Slider/> */}
    </div>
  </div>

</section>

    // <section className="m-12 p-2 sm:mt-8 flex flex-col items-center justify-center sm:h-screen ">
    //     <Image
    //       src="./images/circle-scatter-haikei1.svg"
    //       alt=""
    //       className="bg-cover opacity-20"
    //       width={1000}
    //       height={1000}
    //     ></Image>
    //     <div className="z-10 grid grid-rows-1 gap-12 place-content-between">
    //       <motion.div
    //         initial={{ opacity: 0, translateY: "-100%" }}
    //         whileInView={{ opacity: 1, translateY: 0 }}
    //         transition={{ duration: 1.25 }}
    //       >
    //         <p className="text-6xl sm:text-7xl font-bold text-center tracking-tight transition ease-in-out hover:delay-650 hover:text-[#6ead3d] hover:scale-110 sm:text-7xl league-spartan text-center tracking-tight md:text-8xl league-spartan text-center tracking-tight ">
    //           Your Rewards<span className="text-[#6ead3d]">,</span>
    //           <br /> Their Motivation
    //         </p>
    //       </motion.div>
    //       <motion.div
    //         initial={{ opacity: 0, translateY: "100%" }}
    //         whileInView={{ opacity: 1, translateY: 0 }}
    //         transition={{ duration: 1.25 }}
    //       >
    //         <p className="text-xl text-center font-medium league-spartan sm:text-2xl md:text-2xl">
    //           Empower Creators with TipTank, Revolutionize Rewards with
    //           Decentralized Tipping.
    //         </p>
    //       </motion.div>
    //       <div className="flex justify-center">
    //         <GiveATipButton />
    //       </div>
    //       <div><Slider/></div>
    //     </div>

    //   </section>

  )
}

export default Hero