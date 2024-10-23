import path from "path";
import React from "react";

const HowItWorks = () => {
  return (
    <section className="sm:h-max mt-36" id="HowItWorksSection">
      <div className="h-vh border-4 border-none rounded-xl text-center p-20 m-10">
        <h1 className="text-6xl league-spartan font-bold mt-4">
          How It Works?
        </h1>
        <p className="league-spartan text-lg mt-3">Simple 3 steps to support your favourite creator passion!</p>
        <div className="flex justify-center mt-10 text-xl">
        <ul className="timeline">
  <li>
    <div className="flex justify-center items-center timeline-start timeline-box bg-[#16794b] text-[#ece5ea]">
    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#e4e3dc"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-wallet"
                    >
                      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
                    </svg>
                    <p className="p-4">Connect your Wallet</p>
      </div>
    <div className="timeline-middle">
      <div className="bg-[#16583c] w-12 h-12 rounded-full text-white content-center">1
      </div>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="#16583c"
        className="text-primary h-10 w-10">
        <path
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />1
      </svg> */}
    </div>
    <hr className="bg-[#16794b]" />
  </li>
  <li>
    <hr className="bg-[#16794b]" />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="#16583c"
        className="text-primary h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end timeline-box bg-[#16794b] text-[#ece5ea]">Search your Favourite Creator</div>
    <hr className="bg-[#16794b]" />
  </li>
  <li>
    <hr className="bg-[#16794b]" />
    <div className="timeline-start timeline-box bg-[#16794b] text-[#ece5ea]">Enter the Tip Amount</div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="#16583c"
        className="text-primary h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <hr className="bg-[#16794b]" />
  </li>
  <li>
  <hr className="bg-[#16794b]" />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="#16583c"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end timeline-box bg-[#16794b] text-[#ece5ea]">You are done!</div>
    {/* <hr className="bg-[#16794b]" /> */}
  </li>
</ul>
        </div>
        
        
        {/* <div className="mt-5 py-6 flex flex-col justify-center sm:py-12 league-spartan font-semibold text-lg">
          <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              <div className="hidden sm:block w-1 bg-[#16794b] absolute h-[600px] left-1/2 transform -translate-x-1/2"></div>
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div className="p-4 container rounded shadow text-lg">
                        1. Connect Wallet
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
                      className="lucide lucide-wallet"
                    >
                      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-32 sm:mb-12">
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-max sm:w-1/2 sm:pl-8">
                      <div className="pl-10 p-4 w-max container rounded shadow text-lg">
                        2. Search your favourite Creator
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
                      className="lucide lucide-user-round-search"
                    >
                      <circle cx="10" cy="8" r="5" />
                      <path d="M2 21a8 8 0 0 1 10.434-7.62" />
                      <circle cx="18" cy="18" r="3" />
                      <path d="m22 22-1.9-1.9" />
                    </svg>{" "}
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-32 sm:mb-12">
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div className="p-4 container rounded shadow text-lg">
                        3. Enter the tip Amount
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
                      className="lucide lucide-bitcoin"
                    >
                      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
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
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HowItWorks;
