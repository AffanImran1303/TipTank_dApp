import React from "react";

const HowItWorks = () => {
  return (
    <section className="sm:h-max mt-36" id="HowItWorksSection">
      <div className="h-vh border-4 border-none rounded-xl text-center p-20 m-10">
        <h1 className="text-6xl league-spartan font-bold mt-4">
          How It Works?
        </h1>
        <p className="league-spartan text-lg mt-3">Simple 3 steps to support your favourite creator passion!</p>
        <div className="mt-5 py-6 flex flex-col justify-center sm:py-12 league-spartan font-semibold text-lg">
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
                  <div className="rounded-full timeline-icon border-white border-4 w-28 h-28 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#e4e3dc"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                  <div className="rounded-full timeline-icon border-white border-4 w-28 h-28 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#e4e3dc"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                  <div className="rounded-full timeline-icon border-white border-4 w-28 h-28 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#e4e3dc"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                <div className="rounded-full timeline-icon border-white border-4 w-28 h-28 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#e4e3dc"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
