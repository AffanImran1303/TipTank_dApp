import FeaturedCreatorCards from "@/components/FeaturedCreatorsCard";
import React from "react";

export interface FeaturedCreatorsProps {
  image: string;
  name: string;
  bio: string;
}
const FeaturedCreatorsArray:FeaturedCreatorsProps[]=[
  {image:"/images/featuredcreator1.jpg",name:"Alex",bio:"Creative Director"},
  {image:"/images/featuredcreator2.jpg",name:"Sam",bio:"Photographer"},
  {image:"/images/featuredcreator3.jpg",name:"Julie",bio:"Visual Artist"},
  {image:"/images/featuredcreator4.jpg",name:"Julie",bio:"Illustrator"},
  {image:"/images/featuredcreator5.jpg",name:"Susan",bio:"Designer"},

]
const FeaturedCreators:React.FC= ({

}) => {
  return (
    <section
      className="flex justify-center sm:h-max"
      id="FeaturedCreatorsSection"
    >
      <div className="grid grid-rows-1 gap-y-4 h-vh border-4 border-none rounded-xl text-center">
        <h1 className="text-5xl league-spartan font-bold mt-16 sm:text-8xl">
          Featured Creators
        </h1>
          <p className="text-lg league-spartan px-40">
            Explore our top creators and discover amazing work! From artists and
            writers to musicians and innovators, these featured creators have
            received standout support from the community. Your tips go a long
            way in encouraging and empowering their passion—check out their
            profiles and show your appreciation!
          </p>
        <div className="flex justify-center carousel carousel-center rounded-box w-full space-x-4">
          {[...FeaturedCreatorsArray].map((creator,idx)=>(
            <FeaturedCreatorCards key={idx} image={creator.image} name={creator.name} bio={creator.bio}/>
          ))}
        </div>
        {/* <div className="carousel carousel-center bg-neutral rounded-box w-full space-x-4 p-4 mt-8">
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              className="rounded-box"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedCreators;
