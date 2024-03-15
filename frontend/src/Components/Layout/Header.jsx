import React from "react";
import styles from "../../Styles/styles.js";
import { Link } from "react-router-dom";
import { productData } from "../../Static/data.js";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

function Header() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchData, setSearchData] = React.useState(null);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredData = productData.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchData(filteredData);
  };

  return (
    <div className={`${styles.section}`}>
      <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
        <div>
          <Link to="/">
            <img
              src="https://shopo.quomodothemes.website/assets/images/logo.svg"
              alt="Logo"
            />
          </Link>
        </div>
        {/* search box */}
        <div className="w-[50%] relative">
          <input
            type="text"
            placeholder="Search for products"
            className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <AiOutlineSearch
            size={30}
            className="absolute right-2 top-1.5 cursor-pointer"
          />
          {searchData && searchData.length !== 0 ? (
            <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2  z-[9] p-4">
              {searchData &&
                searchData.map((i, index) => {
                  const id = i.name;

                  const Product_name = id.replace(/\s+/g, "-"); // Corrected regex
                  return (
                    <Link to={`/product/${Product_name}`} key={index}>
                      <div className="flex items-start py-3 w-full">
                        <img
                          src={i.image_Url[0].url}
                          alt={i.name}
                          className="w-[40px] h-[40px] mr-[10px]"
                        />
                        {/* <p className="text-sm">{i.name}</p> */}
                        <h1>{i.name}</h1>
                      </div>
                    </Link>
                  );
                })}
            </div>
          ) : null}
        </div>

        <div className={`${styles.button}`}>
          <Link to="/seller"> {/* Changed "link" to "Link" */}
            <h1 className="text-white flex items-center">
              Become Seller <IoIosArrowForward className="ml-1" />
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
