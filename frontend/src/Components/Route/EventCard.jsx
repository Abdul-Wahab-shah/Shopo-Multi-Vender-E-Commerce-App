import React from "react";
import styles from "../../Styles/styles";
import CountDown from "../CountDown";
import { Link } from "react-router-dom";
import { FaPersonWalkingArrowRight } from "react-icons/fa6";

const EventCard = () => {
  return (
    <div className="w-full block bg-white rounded-lg lg:flex p-2 mb-8">
      <div className="w-full lg:w-[50%] m-auto">
        <img
          src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg"
          alt="imge"
        />
      </div>
      <div className="w-full lg:w-[50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>Iphone 14pro max 8/256gb</h2>
        <p className="text-[16px] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
          laudantium et! Eum delectus, praesentium velit recusandae corrupti
          pariatur suscipit labore fugit enim voluptatum rerum illo culpa
          accusantium. Error ratione minus porro, earum qui eos ipsa unde labore
          maiores illo ducimus incidunt sed, tempora fugit! Suscipit quasi fuga
          odio possimus. pariatur suscipit labore fugit enim voluptatum rerum
          illo culpa accusantium. Error ratione minus porro, earum qui eos ipsa
          unde labore maiores illo ducimus incidunt sed, tempora fugit! Suscipit
          quasi fuga odio possimus.
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              1099$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              999$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            120 sold
          </span>
        </div>
        <CountDown />
        
          <div className="flex gap-10">
            <Link to="/popularevents">
              <div class="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer mt-5">
                <span class="text-[#fff] text-[16px] font-normal">
                  See Details
                </span>
              </div>
            </Link>

            <Link to="/popularevents">
              <div class="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer mt-5">
                <span class="text-[#fff] text-[16px] font-normal">
                  Buy Now
                </span>
              </div>
            </Link>
          </div>
        
        <Link to="/popularevents">
          <div class=" relative w-full h-[50px] text-end pr-11  cursor-pointer">
            <span class="text-black text-[16px] font-[500]">
              See More Events <FaPersonWalkingArrowRight className=" absolute top-4 right-4 float-end items-end" />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
