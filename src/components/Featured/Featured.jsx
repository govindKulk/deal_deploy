import React from "react";
import Image from "next/image";
import background from "../../../public/all blog/villa.jpg";
import discussion from "../../../public/all blog/discussions.webp";
import FeatureCard from "./FeatureCard";
import FeatureSlider from "../allBlog/FeatureSlider";

const Featured = () => {
  return (
    <div className="px-4 py-8 flex flex-col gap-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-12  py-12">
        <div className="col-span-1 py-4   ">
          <div className="flex justify-start my-4">
            <h2 className="text-4xl border-b border-b-black font-[Poppins]">
              Featured
            </h2>
          </div>
          <FeatureCard img={discussion} text="Top Coworking Space On Rent in Modle Town Hisar"/>
        </div>
        <div className="col-span-1 py-4   ">
          <div className="flex justify-start my-4">
            <h2 className="text-4xl border-b border-b-black font-[Poppins]">
              New Updates
            </h2>
          </div>
          <div className="grid  grid-cols-1 sm:grid-cols-2 gap-8 h-full">
            <FeatureCard img={background} text={'Top Coworking Space On Rent in Modle Town Hisar'}/>
            <FeatureCard img={background} text={'Top Coworking Space On Rent in Modle Town Hisar'}/>
            <FeatureCard img={background} text={'Top Coworking Space On Rent in Modle Town Hisar'}/>
            <FeatureCard img={background} text={'Top Coworking Space On Rent in Modle Town Hisar'}/>
            

            {/* Repeat the above structure for the other New Updates items */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1   py-8 md:grid-cols-6 gap-12 ">
        <div className="col-span-1 md:col-span-2 max-h-[300px] h-full">
          <div className="max-h-[300px] h-full ">
          <FeatureCard img={background} text={"Top Coworking Space On Rent in Modle Town Hisar"}/>

          </div>
        </div>
        <div className="col-span-1 md:col-span-4 max-h-[300px] h-full ">
            
          {/* <FeatureCard img={background} text={"Top Coworking Space On Rent in Modle Town Hisar"}/> */}
          <div className="w-full h-full">
          <FeatureSlider img={background} title={"Top Coworking Space On Rent in Modle Town Hisar"} />
          
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Featured;
