"use client";
import React, { useState } from "react";
import ExpertLayout from "./ExpertLayout";
import data from "./dummyData";
import styles from "./expert.module.css"
import RealEstateAd from "./RealEstateAd";
import SearchCategories from "./SearchCategories";

const Experts = () => {
  let [limit, setLimit] = useState(5);
  const filteredData = data["Experts"].slice(0, limit);

  let toggleDisplay = () => {
    if (limit == -1) {
      setLimit(5);
    } else {
      setLimit(-1);
    }
  };
  return (
    // <div className="container flex">
    <div className={styles.MainLayout}>
      <div>
        <h2 className={styles.Explore}>Explore our Rent Agreement Experts</h2>
        <div>
      <div>

      {filteredData.map((dt, index) => (
          <ExpertLayout
            key={index}
            // key={index}
            dt = {dt}
            filteredData={filteredData}
            limit={limit}
          />
      ))}
      <div className="text-center">
    
    <button className={styles.MoreExperts} onClick={toggleDisplay} >{limit == -1 ? 'View Less':  "View All" }</button>
    
    </div>
        </div>
        </div>
        </div>

        <div>



        <div className={styles.MostSearched}>
          {data["MostSearched"].map((Cate, index) => (
    <SearchCategories key={index} city={Cate.Location} category = {Cate.Categories} />
    ))}
    </div>


          <div>
          <RealEstateAd />
        </div>

        </div>
        {/* </div> */}
    </div>
  );
};

export default Experts;
