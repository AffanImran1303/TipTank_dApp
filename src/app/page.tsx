// import Image from "next/image";

'use client'
import Link from "next/link";
import "../app/globals.css";
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
                <p className="text-6xl font-bold text-center sm:text-7xl mb-3 league-spartan text-center tracking-tight md:text-8xl mb-3 league-spartan text-center tracking-tight">
                  Your Rewards,
                  <br /> Their Motivation
                </p>
                <p className="text-xl text-center mt-5 sm:mt-6 text-2xl font-medium league-spartan">
                  Empower Creators with TipTank, Revolutionize Rewards with
                  Decentralized Tipping.
                </p>
                <div className="flex justify-center mt-8">
                  <GiveATipButton/>
                  {/* <a className="btn btn-ghost bg-[#16794b] border-0 text-white w-64 transition ease-in-out delay-450 hover:bg-[#0c4727] hover:scale-110">
                    Give A Tip
                  </a> */}
                </div>
          </section>
      <About/>
      <HowItWorks/>
      <FeaturedCreators/>
      <FAQ/>
         
    </>
  );
}
