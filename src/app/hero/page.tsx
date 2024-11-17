import React from 'react'
import { motion } from "framer-motion";
import "/public/globals.css";
import GiveATipButton from "@/components/GiveATipButton";
import Slider from "@/components/Slider";
const Hero = () => {
  return (
    <section className="mt-8 flex flex-col items-center justify-center h-screen sm:h-screen ">
        <img
          src="./images/circle-scatter-haikei1.svg"
          className="absolute opacity-20"
        ></img>
        <div className="z-10 grid grid-rows-1 gap-12 place-content-between">
          <motion.div
            initial={{ opacity: 0, translateY: "-100%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1.25 }}
          >
            <p className="text-6xl font-bold text-center tracking-tight transition ease-in-out hover:delay-650 hover:text-[#6ead3d] hover:scale-110 sm:text-7xl league-spartan text-center tracking-tight md:text-8xl league-spartan text-center tracking-tight ">
              Your Rewards<span className="text-[#6ead3d]">,</span>
              <br /> Their Motivation
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: "100%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1.25 }}
          >
            <p className="text-xl text-center font-medium league-spartan sm:text-2xl md:text-2xl">
              Empower Creators with TipTank, Revolutionize Rewards with
              Decentralized Tipping.
            </p>
          </motion.div>
          <div className="flex justify-center">
            <GiveATipButton />
          </div>
          <div><Slider/></div>
        </div>

      </section>

  )
}

export default Hero