import React, { useState } from "react";
import { LINKS } from "@/static";
import { Link, NavLink } from "react-router-dom";
import SiteLogo from "@/assets/SiteLogo.svg";
import { BsPerson } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

const Header = ({ backgroundHeader }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`h-[67px] flex items-center ${backgroundHeader} max-[768px]:flex-col max-[768px]:h-auto sticky top-0 left-0 z-50 bg-white`}
    >
      <div className="header__container">
        <nav className="flex items-center justify-between gap-10 max-md:items-center max-md:h-16 max-[768px]:gap-1">
          <div className="gap-[120px] flex items-center max-[768px]:flex-col max-[768px]:gap-0">
            <div>
              <NavLink to={"/"}>
                <img src={SiteLogo} alt="Site Logo" />
              </NavLink>
            </div>
            <ul
              className={`flex items-center gap-4 max-[768px]:hidden ${
                menuOpen ? "block" : "hidden"
              } max-[768px]:flex-col`}
            >
              {LINKS.map((item, inx) => (
                <li
                  className="text-[#737373] text-sm font-bold hover:text-black"
                  key={inx}
                >
                  <NavLink to={item.to}>{item.link}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4 text-[#23A6F0] text-sm">
            <Link>
              <span className="flex items-center gap-1 font-bold max-[920px]:hidden">
                <BsPerson /> Login / <span>Register</span>
              </span>
            </Link>
            <div className="flex gap-8 text-xl max-[900px]:gap-4">
              <Link>
                <PiShoppingCart />
              </Link>
              <CiSearch />
              <Link to={"/wishlist"}>
                <FaRegHeart />
              </Link>
              <button
                onClick={toggleMenu}
                className="max-[920px]:block hidden text-xl"
              >
                {menuOpen ? <AiOutlineClose /> : <HiMiniBars3BottomRight />}
              </button>
            </div>
          </div>
        </nav>
        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } max-[768px]:flex-col max-[768px]:gap-1 max-[768px]:text-center max-[768px]:text-[20px] max-md:mt-4`}
        >
          {LINKS.map((item, inx) => (
            <li
              className="text-[#737373] text-sm font-bold hover:text-black max-md:text-xl max-md:font-medium max-md:mb-2"
              key={inx}
            >
              <NavLink to={item.to}>{item.link}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
