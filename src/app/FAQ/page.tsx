import React from "react";

const FAQ = () => {
  return (
    <section className="flex justify-center sm:h-max mt-36" id="FAQSection">
      <div className="h-vh w-fit text-center p-20 m-10">
        <h1 className="text-5xl league-spartan font-bold mt-4">
          Frequently Asked Questions.
        </h1>
        <div className="flex justify-center">
          <div className="collapse collapse-arrow w-80 mt-8 text-[#fffdff] border-4 border-[#6ead3d] league-spartan sm:w-full">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Click me to show/hide content
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="collapse collapse-arrow w-80 mt-8 text-[#fffdff] border-4 border-[#6ead3d] league-spartan sm:w-full">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Click me to show/hide content
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="collapse collapse-arrow w-80 mt-8 text-[#fffdff] border-4 border-[#6ead3d] league-spartan sm:w-full">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Click me to show/hide content
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
