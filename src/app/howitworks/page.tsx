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
  return (
    <section
      className="relative w-full max-w-2xl mx-auto py-20 sm:h-max mt-36"
      ref={ref}
      id="HowItWorksSection"
    >
      <div className="h-screen border-4 border-none rounded-xl text-center p-20 m-10">
        <h1 className="text-6xl league-spartan font-bold mt-4">
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
            <div className="rounded-full timeline-icon border-[#6ead3d] border-4 w-24 h-24 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <svg
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
              >
                <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
              </svg>
            </div>
          </div>
          <div className="absolute m-10">Connect Wallet</div>
          <div>
            <div className="z-10 rounded-full timeline-icon border-[#6ead3d] border-4 w-24 h-24 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <svg
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
              >
                <circle cx="10" cy="8" r="5" />
                <path d="M2 21a8 8 0 0 1 10.434-7.62" />
                <circle cx="18" cy="18" r="3" />
                <path d="m22 22-1.9-1.9" />
              </svg>{" "}
            </div>
            <div className="absolute m-8 ml-16">Search your favourite creator</div>
          </div>
          <div>
            <div className="z-10 rounded-full timeline-icon border-[#6ead3d] border-4 w-24 h-24 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <svg
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
              >
                <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
              </svg>
              {""}
            </div>
          </div>
          <div>
            <div className="rounded-full timeline-icon border-[#6ead3d] border-4 w-24 h-24 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <svg
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
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

  /* 
    <div className="mt-6 sm:mt-32">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pl-8">
                    <div className="p-4 container rounded shadow">
                      All set, you are done!
                    </div>
                  </div>
                </div>
                <div className="rounded-full timeline-icon border-[#e4e3dc] border-4 w-28 h-28 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <svg
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
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
              </div>
            </div> */


