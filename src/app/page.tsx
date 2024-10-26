// import Image from "next/image";

'use client'
// import Link from "next/link";
import {motion} from "framer-motion";
import "/public/globals.css";
import About from "./about/page";
import HowItWorks from "./howitworks/page";
import FeaturedCreators from "./featuredcreators/page";
import FAQ from "./FAQ/page";
import GiveATipButton from "@/components/GiveATipButton";
export default function Home() {
  return (
    <>
          <section className="flex flex-col items-center justify-center h-screen sm:h-screen">
            <img src='./images/circle-scatter-haikei1.svg' className="absolute opacity-20"></img>
                <motion.div
                  initial={{opacity:0,translateY:"-100%"}}
                  whileInView={{opacity:1,translateY:0}}
                  transition={{duration:1.25}}
                >
                <p className="text-6xl font-bold text-center tracking-tight sm:text-7xl mb-3 league-spartan text-center tracking-tight md:text-8xl mb-3 league-spartan text-center tracking-tight ">
                  Your Rewards<span className="text-[#6ead3d]">,</span>
                  <br /> Their Motivation
                </p>
                </motion.div>
                <motion.div
                  initial={{opacity:0,translateY:"100%"}}
                  whileInView={{opacity:1,translateY:0}}
                  transition={{duration:1.25}}
                >
                <p className="text-xl text-center mt-5  font-medium league-spartan sm:mt-6 text-2xl md:text-3xl">
                  Empower Creators with TipTank, Revolutionize Rewards with
                  Decentralized Tipping.
                </p>
                </motion.div>
                
                <div className="flex justify-center mt-8">
                  <GiveATipButton/>
                </div>
          </section>
      <About/>
      <HowItWorks/>
      <FeaturedCreators/>
      <FAQ/>
         
    </>
  );
}
