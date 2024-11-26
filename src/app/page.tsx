"use client";
import { motion } from "framer-motion";
import "/public/globals.css";
import About from "./about/page";
import HowItWorks from "./howitworks/page";
import FeaturedCreators from "./featuredcreators/page";
import FAQ from "./FAQ/page";
import Hero from "./hero/page";

export default function Home() {
  return (
    <>
      <Hero/>
      <About />
      {/* <HowItWorks />
      <FeaturedCreators />
      <FAQ /> */}
    </>
  );
}
