import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../Styles/styles";
import { AiFillHeart, AiOutlineEye, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
// import Wishlist from "../Wishlist/Wishlist";

const ProductCard = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [heartClick, setHeartClick] = useState(false); // State variable for heart icon click
  const [cartClick, setCartClick] = useState(false); // State variable for shopping cart icon click

  const d = data.name;
  const product_name = data.name.replace(/\s+/g, "-").toLowerCase();

  return (
    <>
      <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link to={`/product/${product_name}`}>
          <img
            src={data.image_Url[0].url}
            alt="image"
            style={{ objectFit: "contain", width: "100%", height: "170px" }}
          />
        </Link>
        <Link to="/">
          <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
        </Link>
        <Link to={`/product/${product_name}`}>
          <h4 className="pb-3 font-[500px]">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>
          <div className="flex text-yellow-500 text-[20px]">
            {/* Rating stars */}
          </div>
          <div className="py-2 flex items-center justify-between">
            <div className="flex">
              {/* Product prices */}
            </div>
            <span className="font-[400] text-[17px] text-[#68d284]">
              {data.total_sell} sold
            </span>
          </div>
        </Link>
        {/* Heart, Eye, and Cart icons */}
        <div>
          {/* Heart icon */}
          {heartClick ? (
            <AiFillHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => setHeartClick(!heartClick)}
              color="red"
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => setHeartClick(!heartClick)}
              color="#333"
              title="Add to wishlist"
            />
          )}

          {/* Eye icon */}
          <AiOutlineEye
            size={22}
            className="cursor-pointer absolute right-2 top-14"
            onClick={() => setOpen(!open)}
            color="#333"
            title="Quick view"
          />

          {/* Cart icon */}
          <AiOutlineShoppingCart
            size={22}
            className="cursor-pointer absolute right-2 top-24"
            onClick={() => setCartClick(!cartClick)}
            color={cartClick ? "green" : "#444"} // Change color based on click state
            title={cartClick ? "Added to cart" : "Add to cart"}
          />
        </div>

        {/* Product details modal */}
        {open && <ProductDetailsCard setOpen={setOpen} data={data} />}
      </div>
    </>
  );
};

export default ProductCard;
