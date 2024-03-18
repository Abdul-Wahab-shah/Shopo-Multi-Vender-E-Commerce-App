import React from "react";
import styles from "../../../Styles/styles";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      class="relative min-h-[70vh] md:min-h-[80vh] w-full bg-no-repeat md:flex items-center  "
      style={{background: `url(${"https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg"})`}}
    >
      <div className={`${styles.section} w-[90%] md:w-[60%] `}>
        <h1 class="text-[35px] leading-[1.2] md:text-[60px] text-[#3d3a3a] pt-[30px] font-[600] capitalize">
          Best Collection for <br /> home Decoration
        </h1>
        <p class="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          assumenda? Quisquam itaque <br />
          exercitationem labore vel, dolore quidem asperiores, laudantium
          temporibus soluta optio consequatur
          <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
        </p>
        <Link class="inline-block" to="/products">
          <div class="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer mt-5">
            <span class="text-[#fff] font-[Poppins] text-[18px]">Shop Now</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
