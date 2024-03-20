import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BsCartPlus } from "react-icons/bs";
import styles from "../../Styles/styles";
import { AiOutlineHeart } from "react-icons/ai";

const Wishlist = ({ setOpenWishlist }) => {
  const cartData = [
    {
      name: "Iphone 14 pro max",
      description: "test",
      price: 999,
    },
    {
      name: "Iphone 14 pro max",
      description: "test",
      price: 349,
    },
    {
      name: "Iphone 14 pro max",
      description: "test",
      price: 799,
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full bg-[#000000b4] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full md:w-[25%] w-[50%] bg-white flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-end pt-5 pr-3">
            <RxCross1
              size={25}
              className="cursor-pointer "
              onClick={() => setOpenWishlist(false)}
            />
          </div>
          {/* item length */}
          <div className={`${styles.noramlFlex} p-4`}>
            <AiOutlineHeart size={25} />
            <h5 className="pl-2 text-[20px] font-[500]">3 items</h5>
          </div>
          {/* cart single items */}
          <br />
          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => <CartSingle key={index} data={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
  const [value, setvalue] = useState(1);
  const totalPrice = data.price * value;

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <RxCross1 size={5} className="cursor-pointer"/>
        <img src="https://bonik-react.vercel.app/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png" alt="product image" className="w-[80px] h-[80px] ml-2" />
      
        <div className="pl=[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            US${totalPrice}
          </h4>
        </div>
        <div className="pl-12">
            <BsCartPlus size={20} className="cursor-pointer" title="Add to cart"  />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
