import FeaturedCreatorCards from "@/components/FeaturedCreatorsCard";
import React from "react";
import {FeaturedCreatorsArray} from "@/constants";


const FeaturedCreators:React.FC= ({

}) => {
  return (
    <section
      className="flex justify-center sm:h-max"
      id="featuredcreators"
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
