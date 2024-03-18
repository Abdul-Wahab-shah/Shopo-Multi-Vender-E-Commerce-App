import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard"; // Import the ProductCard component
import { productData } from "../../../Static/data"; // Assuming productData is imported from a data file
import styles from "../../../Styles/styles"; // Assuming styles is imported

function BestDeals() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Sort productData based on total_sell and get the top 5 items
    const bestSellingData = productData
      .slice()
      .sort((a, b) => b.total_sell - a.total_sell)
      .slice(0, 5);
    setData(bestSellingData);
  }, []);

  return (
    <div className={`${styles.section}`}>
      <div className={`${styles.heading} font-bold  mt-[30px] mb-1`}>
        <h1>Best Deals</h1>
      </div>
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
        {data.map((product, index) => (
          <ProductCard key={index} data={product} /> // Render ProductCard component for each product
        ))}
      </div>
    </div>
  );
}

export default BestDeals;
