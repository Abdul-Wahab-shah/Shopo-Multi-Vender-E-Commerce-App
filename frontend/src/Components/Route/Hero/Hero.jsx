import React from "react";
import styles from "../../../Styles/styles";

function Hero() {
  return (
    <div
      className={` min-h-[80vh] 800px:min-h-[70vh] w-full bg-no-repeat ${styles.noramlFlex} `}
      style={{
        backgroundImage: `url(${"https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg"})`,
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%] `}>
        <h1
          className={`text-[45px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Best collection for <br /> home decoration
        </h1>
        <p className="pt-5 text-[16px] font-[poppins] font-[400] text-[#000000ba]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          illo ipsa perspiciatis <br /> laborum blanditiis veritatis ad dolorem officia
          commodi. Quidem soluta neque fuga, rem <br /> animi at blanditiis aspernatur
          necessitatibus facere.
        </p>
      </div>
    </div>
  );
}

export default Hero;
