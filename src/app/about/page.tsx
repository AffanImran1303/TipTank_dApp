import React from 'react';
import "/public/globals.css";

const About = () => {
  return (
    <section className="league-spartan hover:text-sky-400 sm:h-max mt-56" id="AboutSection">
      <img
          src="./images/wave-haikei.svg"
          className="absolute opacity-20"
        ></img>
      <div className="h-vh grid grid-rows-1 gap-20 place-content-evenly text-[#fffdff] text-center p-20">
      
        <p className="grid-row text-5xl league-spartan font-bold transition ease-in-out hover:delay-650 hover:text-[#6ead3d] hover:scale-110 sm:text-7xl ">About TipTank</p>
        <div className="text-xl leading-loose z-10  pl-80 pr-80 font-light">
      <p className="relative">TipTank, your platform for directly supporting the creators you admire! Our mission is to empower artists, writers, musicians, educators, and other creatives by providing a seamless way for fans to show appreciation for their work through tips and contributions.</p>

      <p className="m-12">In today’s fast-paced digital world, creators put countless hours into producing valuable content, often without the security of a steady income. TipTank addresses this by offering a decentralized, user-driven space where fans can easily tip creators as a way to recognize and support their efforts. Unlike traditional platforms, TipTank operates on the blockchain, ensuring transparency, lower fees, and a fairer system that benefits creators more directly.</p>
      </div>
      <div className="absolute w-[18%] mt-20 opacity-80">
        <img src="./images/aboutcreator1.jpg" className="border-[#6ead3d] border-2 rounded-xl"></img>
      </div>
      <div className="absolute w-[16%] mt-36 opacity-70 place-self-end">
        <img src="./images/aboutcreator2.jpg" className="border-[#6ead3d] border-2 rounded-xl"></img>
      </div>
      </div>
      <div className="grid grid-cols-1 gap-12 mt-12 flex justify-center text-center leading-loose place-items-stretch font-light">
        <div className="w-[70%] place-self-center p-16 bg-[#6ead3d] text-[#00302e] border-none border-4 rounded-xl">
        <img
          src="./images/circle-scatter-haikeiAB.svg"
          className="absolute opacity-10"
        ></img>
          <h1 className="text-5xl font-bold p-6">Why TipTank?</h1>
          <p className="text-xl rounded font-semibold">By removing intermediaries, TipTank allows creators to keep a greater share of their earnings. Fans can connect their wallets, discover and follow their favorite creators, and contribute tips that are immediately accessible to the creators. Our platform is built to be simple and intuitive, ensuring that all users—from tech-savvy blockchain enthusiasts to everyday fans—can engage effortlessly.</p>
        </div>
        <div className="w-[70%] place-self-center p-16 bg-[#6ead3d] text-[#00302e] border-none border-4 rounded-xl">
          <h1 className="text-5xl font-bold p-6">Our Vision</h1>
          <p className="text-xl font-semibold">Our Vision is to create a culture where creators are rewarded fairly and sustainably, and where fans play an active role in supporting the content they love. With TipTank, you’re not only contributing financially but also helping to foster a more vibrant and diverse creative community. Join us in reshaping the way we support creators—one tip at a time.</p>
        </div>
      </div>

    </section>
  )
}

export default About