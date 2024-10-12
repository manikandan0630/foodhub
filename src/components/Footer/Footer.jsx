import React from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
const Footer = () => {
  return (
    <>
      <div className="container">
        {/*nav links*/}
        <div className=" w-[95%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  place-items-center gap-32 mx-auto  mt-10">
          {/*title */}
          <div className="flex flex-col text-center sm:text-start gap-3">
            <a href="#" className="text-md font-bold sm:text-3xl">
              <span className="bg-primary px-4 py-2 rounded-full text-white font-bold text-2xl">
                F
              </span>
              oodie
            </a>
            <p className="text-md sm:text-lg mt-3 w-[70%] sm:w-auto mx-auto sm:mx-0">
              Savor the artistry where every dish is a culinary masterpiece
            </p>
          </div>
          {/* Contact Us Section */}
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-md font-bold">Contact Us</h1>
            <p>mani@gmail.com</p>
            <p>+91782673688</p>
            <p>Social media</p>
          </div>
          {/* Main Menu Section */}
          <div className="flex flex-col gap-3 items-center">
            <h1 className="font-bold text-md">Main menu</h1>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>

        {/*icons*/}
        <div className="flex justify-center items-center mx-auto gap-32 mt-10 py-5">
          <div className="flex justify-start gap-3">
            <div className="px-1 py-3 rounded-full w-10 border hover:bg-facebookcolor hover:text-white bg-iconcolor">
              <FiFacebook className="mx-auto " />
            </div>
            <div className="px-1 py-3 rounded-full w-10 border  hover:bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] via-[#F56040] to-[#FCAF45] hover:text-white bg-iconcolor  ">
              <FiInstagram className="mx-auto font-bold" />
            </div>
            <div className="px-1 py-3 rounded-full w-10 border  hover:bg-twittercolor hover:text-white bg-iconcolor  ">
              <FiTwitter className="mx-auto" />
            </div>
            <div className="px-1 py-3 rounded-full w-10 border  hover:bg-youtubecolor hover:text-white bg-iconcolor ">
              <FiYoutube className="mx-auto" />
            </div>
          </div>

          <div className="text-center ">
            <p className="text-gray-700">
              Copyright &copy; 2024 Mani | All rights reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
