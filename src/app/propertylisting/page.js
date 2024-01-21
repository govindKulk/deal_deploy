"use client"

import About from "@/components/propertyListing/About/About";
import Guide from "@/components/propertyListing/Guide/Guide";
import Hero from "@/components/propertyListing/Hero/Hero";
import FAQ from "@/components/property/maincontentcontainer/FAQ.jsx";
import {data} from './dummydata'
import React, { Fragment } from "react";
import ReadMore from "@/components/propertyListing/ReadMore/ReadMore";


const page = () => {
  return (
    <Fragment>
      <Hero />
      <Guide />
      <About />
      <div className='px-4 sm:px-8 md:px-16 lg:px-32 space-y-8  py-5'>
        <h2 class="text-3xl font-bold">Frequently Asked Questions</h2><br/>
      <FAQ  faqdata = {data.mainContent.FaqData} />
      </div>
      <ReadMore />
    </Fragment>
  );
};

export default page;
