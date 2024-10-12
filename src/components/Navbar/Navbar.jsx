import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import Darkmode from "./Darkmode";
const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 ">
        <div className="container  py-3  sm:py-0">
          <div className="flex justify-between items-center">
            <div className="py-3">
              <a
                href="#"
                className=" flex items-center text-lg sm:text-4xl font-bold  p-1  "
              >
                {/* <img className=" w-20 sm:w-36 " src={Logo} alt="logo" /> */}
                <span className=" bg-primary px-4 py-2 rounded-full font-bold text-white text-2xl">F</span>
                oodhub
              </a>
            </div>
            <div className="flex items-center gap-3 relative">
              <ul className=" hidden sm:flex gap-4 ">
                <li >
                  <Link
                    to="/"
                    className="inline-block px-4 py-2  rounded-sm hover:text-white hover:bg-primary"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="inline-block px-4 py-2 rounded-sm hover:text-white hover:bg-primary"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="inline-block px-4 py-2 rounded-sm hover:text-white hover:bg-primary"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-full hover:scale-105 duration-300 sm:hidden">
                Order
                <FaCartShopping className="inline-block ml-2 text-xl cursor-pointer drop-shadow-sm" />
              </button>
              <div className="absolute sm:-left-10 -left-10 ">
                <Darkmode  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
