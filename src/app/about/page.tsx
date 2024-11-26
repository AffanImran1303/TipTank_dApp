import React from "react";
import "/public/globals.css";

const About = () => {
  return (
    <section className="league-spartan mt-12 h-max" id="AboutSection">
      <div className="place-content-evenly text-center text-[#fffdff]">
        <p className="text-4xl league-spartan font-bold transition ease-in-out hover:delay-650 hover:text-[#6ead3d] hover:scale-110 sm:text-5xl md:text-6xl">
          About TipTank
        </p>
        <div className="text-xl leading-loose z-10 font-light p-8 m-2">
          <p className="mx-8">
            TipTank is a blockchain-powered platform designed to help fans
            directly support their favorite creators—artists, writers,
            musicians, educators, and more. In a world where creators invest
            endless hours into their craft without guaranteed income, TipTank
            offers a decentralized space for fans to show appreciation through
            transparent and low-fee tipping, ensuring creators receive fair and
            meaningful support for their efforts.
          </p>
        </div>
      </div>
      <div className="place-items-center grid grid-cols-1 gap-y-8 lg:grid-cols-2 gap-0 text-center leading-loose font-light sm:mt-12">
        <div className="w-[65%] p-8 border-2 border-[#6ead3d] rounded-xl shadow-2xl">
          <h1 className="text-4xl font-bold p-4 text-center sm:text-5xl">Why TipTank?</h1>
          <p className="text-xl">
            By removing intermediaries, TipTank allows creators to keep a
            greater share of their earnings. Fans can connect their wallets,
            discover and follow their favorite creators, and contribute tips
            that are immediately accessible to the creators. Our platform is
            built to be simple and intuitive, ensuring that all users—from
            tech-savvy blockchain enthusiasts to everyday fans—can engage
            effortlessly.
          </p>
        </div>
        <div className="w-[65%] place-self-center p-8 border-2 border-[#6ead3d] rounded-xl shadow-2xl">
          <h1 className="text-4xl font-bold p-4 sm:text-5xl">Our Vision</h1>
          <p className="text-xl mt-2">
            Our Vision is to create a culture where creators are rewarded fairly
            and sustainably, and where fans play an active role in supporting
            the content they love. With TipTank, you’re not only contributing
            financially but also helping to foster a more vibrant and diverse
            creative community. Join us in reshaping the way we support
            creators—one tip at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
