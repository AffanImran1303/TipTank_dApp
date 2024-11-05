import React from 'react';
import "/public/globals.css";

const About = () => {
  return (
    <section className="league-spartan sm:h-max mt-56" id="AboutSection">
      <div className="h-vh grid grid-rows-1 gap-20 place-content-evenly text-[#fffdff] text-center p-20">
        <h1 className="grid-row text-5xl league-spartan font-bold sm:text-7xl">About TipTank</h1>
        <div className="text-xl text-[#e3e8e6] leading-loose z-10  pl-80 pr-80 font-light">
      <p className="relative">TipTank, your platform for directly supporting the creators you admire! Our mission is to empower artists, writers, musicians, educators, and other creatives by providing a seamless way for fans to show appreciation for their work through tips and contributions.</p>

      <p className="m-12">In today’s fast-paced digital world, creators put countless hours into producing valuable content, often without the security of a steady income. TipTank addresses this by offering a decentralized, user-driven space where fans can easily tip creators as a way to recognize and support their efforts. Unlike traditional platforms, TipTank operates on the blockchain, ensuring transparency, lower fees, and a fairer system that benefits creators more directly.</p>
      </div>
      <div className="absolute w-[18%] mt-20 opacity-80">
        <img src="./images/aboutcreator1.jpg"></img>
      </div>
      <div className="absolute w-[16%] mt-36 opacity-70 place-self-end">
        <img src="./images/aboutcreator2.jpg"></img>
      </div>
      </div>

    </section>
  )
}

export default About