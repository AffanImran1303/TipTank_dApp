import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import "/public/globals.css";
const HowItWorks = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const height = useTransform(
    useSpring(scrollYProgress,{stiffness:90}),
    [0, 1],
    ["0%", "100%"]
  );
  const step1Color = useTransform(scrollYProgress, [0.25,0.45], ["", "#6ead3d"]);
  const step2Color = useTransform(scrollYProgress, [0.35,0.75], ["", "#6ead3d"]);
  const step3Color = useTransform(scrollYProgress, [0.65,1], ["", "#6ead3d"]);
  const step4Color = useTransform(scrollYProgress, [0.82,1], ["", "#6ead3d"]);

  const iconStrokeColor1 = useTransform(scrollYProgress, [0.25, 0.45], ["#e4e3dc", "#00302e"]);
  const iconStrokeColor2 = useTransform(scrollYProgress, [0, 0.5], ["#e4e3dc", "#00302e"]);
  const iconStrokeColor3 = useTransform(scrollYProgress, [0, 0.65], ["#e4e3dc", "#00302e"]);
  const iconStrokeColor4 = useTransform(scrollYProgress, [0.25, 0.65], ["#e4e3dc", "#00302e"]);

  return (
    <section
      className="relative w-full py-20 sm:h-max mt-36"
      ref={ref}
      id="HowItWorksSection"
    >
            <img
          src="./images/wave-haikei1.svg"
          className="absolute opacity-10"
        ></img>
      <div className="h-screen border-4 border-none rounded-xl text-center m-10">

        <h1 className="text-4xl league-spartan font-bold mt-4 sm:text-5xl">
          How It Works?
        </h1>

        <p className="league-spartan text-lg mt-3">
          Simple 3 steps to support your favourite creator passion!
        </p>
        <div className="flex justify-center mt-12">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-slate-600 h-[570px]">
            <motion.div
              className="w-full bg-[#6ead3d] origin-top"
              style={{ height }}
              transition={{ delay: 10 }}
            ></motion.div>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-40 place-content-evenly">
          <div>
            <motion.div style={{backgroundColor:step1Color}} className="shadow-2xl rounded-full timeline-icon border-[#6ead3d] border-4 w-24 h-24 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e4e3dc"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-wallet"
                style={{stroke:iconStrokeColor1}}
              >
                <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
              </motion.svg>
            </motion.div>
            <p className="absolute mt-8 ml-16 text-lg">1. Connect your Wallet</p>
          </div>
       
    
          <div>
            
            <motion.div style={{backgroundColor:step2Color}} className="z-10 shadow-2xl rounded-full timeline-icon border-[#6ead3d] border-4 w-24 h-24 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e4e3dc"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user-round-search"
                style={{stroke:iconStrokeColor2}}
              >
                <circle cx="10" cy="8" r="5" />
                <path d="M2 21a8 8 0 0 1 10.434-7.62" />
                <circle cx="18" cy="18" r="3" />
                <path d="m22 22-1.9-1.9" />
              </motion.svg>{" "}
              
            </motion.div>
            <p className="absolute mt-8 ml-16 text-lg">2. Search your favourite creator</p>
          </div>
          <div>
          
            <motion.div style={{backgroundColor:step3Color}} className="z-10 shadow-2xl rounded-full timeline-icon border-[#6ead3d] border-4 w-24 h-24 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e4e3dc"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-bitcoin"
                style={{stroke:iconStrokeColor3}}
              >
                <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
              </motion.svg>
            </motion.div>
            <p className="absolute mt-8 ml-16 text-lg">3. Enter the Tip Amount</p>
          </div>
          <div>
            <motion.div style={{backgroundColor:step4Color}} className="rounded-full shadow-2xl timeline-icon border-[#6ead3d] border-4 w-24 h-24 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e4e3dc"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check"
                style={{stroke:iconStrokeColor4}}
              >
                <path d="M20 6 9 17l-5-5" />
              </motion.svg>
            </motion.div>
            <div className="absolute m-8 ml-16 text-lg">All set, you are done!</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;