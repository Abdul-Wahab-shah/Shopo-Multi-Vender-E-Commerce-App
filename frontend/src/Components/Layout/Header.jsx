import React from "react";
import styles from "../../Styles/styles";
import { Link } from "react-router-dom";
import { productData } from "../../Static/data.js";
import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchData, setSearchData] = React.useState(null);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredData =
      productData &&
      productData.filter((product) => {
        return product.name.toLowerCase().includes(term.toLowerCase());
      });
    setSearchData(filteredData);
  };

  return (
    <div className={`${styles.section}`}>
      <div className="hidden 800px:h-[50px] 800px:my=[20px] 800px:flex items-center justify-between">
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
            value={searchData ? searchTerm : ""}
            onChange={handleSearchChange}
          />
          <AiOutlineSearch
            size={30}
            className="absolute right-2 top-1.5 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
