import React from "react";
import styles from "../../Styles/styles";
import { navItems } from "../../Static/data";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className={`${styles.noramlFlex}`}>
      {navItems.map((item, index) => (
        <div className="flex" key={index}>
          <Link
            to={item.url}
            className={`text-[#fff] font-[500] px-6 cursor-pointer ${
              location.pathname === item.url ? "text-green-300" : ""
            }`}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
