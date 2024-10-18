// import Image from "next/image";

'use client'
import Link from "next/link";
import "../app/globals.css";
import About from "./about/page";
import HowItWorks from "./howitworks/page";
import FeaturedCreators from "./featuredcreators/page";
import FAQ from "./FAQ/page";
export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <div className="">
          <section className="m-20 sm:h-max mt-40">
            <div className="flex justify-center">
              <div className="">
                <p className="text-6xl font-bold text-center sm:text-7xl mb-3 league-spartan text-center tracking-tight md:text-8xl mb-3 league-spartan text-center tracking-tight">
                  Your Rewards,
                  <br /> Their Motivation
                </p>
                <p className="text-xl text-center mt-5 sm:mt-6 text-2xl font-medium league-spartan">
                  Empower Creators with TipTank, Revolutionize Rewards with
                  Decentralized Tipping.
                </p>
                <div className="flex justify-center mt-8">
                  <a className="btn btn-ghost bg-black border-0 text-white w-64">
                    Give A Tip
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <About/>
      <HowItWorks/>
      <FeaturedCreators/>
      <FAQ/>
         
    </>
  );
}
