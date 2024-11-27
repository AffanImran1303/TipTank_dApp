import FeaturedCreatorCards from "@/components/FeaturedCreatorsCard";
import React from "react";

export interface FeaturedCreatorsProps {
  image: string;
  name: string;
  bio: string;
}
const FeaturedCreatorsArray:FeaturedCreatorsProps[]=[
  {image:"/images/featuredcreator1.jpg",name:"Noah Castillo",bio:"Music Producer"},
  {image:"/images/featuredcreator2.jpg",name:"Kai Nguyen",bio:"Travel Vlogger"},
  {image:"/images/featuredcreator3.jpg",name:"Luna Rivera",bio:"Digital Illustrator"},
  {image:"/images/featuredcreator4.jpg",name:"Sophia Chen",bio:"Tech Educator"},

]
const FeaturedCreators:React.FC= ({

}) => {
  return (
    <section
      className="flex justify-center sm:h-max"
      id="FeaturedCreatorsSection"
    >
      <div className="border-4 border-none rounded-xl text-center">
        <h1 className="text-4xl league-spartan font-bold mt-32 sm:mt-48 text-5xl md:text-6xl">
          Featured Creators
        </h1>
          <p className="text-xl league-spartan font-light mt-4 px-12 sm:mt-8 xl:px-64">
            Explore our top creators and discover amazing work! From artists and
            writers to musicians and innovators, these featured creators have
            received standout support from the community.
          </p>
        <div className="grid grid-cols-2 rounded-box space-x-4 lg:flex justify-center">
          {[...FeaturedCreatorsArray].map((creator,idx)=>(
            <FeaturedCreatorCards key={idx} image={creator.image} name={creator.name} bio={creator.bio}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCreators;
