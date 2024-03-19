import React from "react";
import styles from "../../../Styles/styles";
import { brandingData, categoriesData } from "../../../Static/data";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();
  return (
    <>
      <div className={`${styles.section} sm:block hidden`}>
        <div
          className={`branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md`}
        >
          {brandingData &&
            brandingData.map((brand, index) => (
              <div key={index} className="flex items-start">
                {brand.icon}
                <div className="px-3">
                  <h3 className=" font-bold text-sm md:text-base">
                    {brand.title}
                  </h3>
                  <p className="text-xs md:text-sm"></p>
                  {brand.Description}
                </div>
              </div>
            ))}
        </div>
      </div>

      <div
        className={`${styles.section} bg-white p-6 rounded-lg mb-12`}
        id="categories"
      >
        <div
          div
          className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-5 xl:gap-[20px]   "
        >
          {categoriesData &&
            categoriesData.map((category) => {
              const handleSubmit = (category) => {
                navigate(`/products?category=${category.title}`);
              };
              return (
                <div
                  key={category.id}
                  onClick={() => handleSubmit(category)}
                  className="w-full h-[100px] flex items-center justify-between cursor-pointer overflow-hidden"
                >
                  <h5 className={`text-[18px leading-[1.3]`}>
                    {category.title}
                  </h5>
                  <img
                    src={category.image_Url}
                    alt="Images"
                    className=" w-[120px] object-cover"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Categories;
