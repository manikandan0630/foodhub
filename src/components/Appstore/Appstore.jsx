import React from "react";
import AppStoreImg from "../../assets/app_store.png";
import PlayStoreImg from "../../assets/play_store.png";
import Gif from "../../assets/mobile_bike.gif";


const Appstore = () => {
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">

            {/*Appstore and playstore image */}
            <div className="space-y-6 max-w-xl mx-auto">
              <h1 className="text-2xl sm:text-4xl text-start sm:text-left font-semibold dark:text-gray-400  text-gray-700">
                Foodie is available on android and IOS
              </h1>

              <div className="  flex justify-center items-center sm:justify-start">
                <a href="#">
                  <img
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                    src={PlayStoreImg}
                    alt="PlayStore"
                  />
                </a>
                <a href="#">
                  <img
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                    src={AppStoreImg}
                    alt="AppStore"
                  />
                </a>
              </div>
            </div>

            {/*Bike gif */}
            <div  className="p-3 ">
              
                <img src={Gif} alt="bike" className="w-full sm:max-w-[60%] block rounded-md mx-auto mix-blend-multiply dark:mix-blend-difference"/>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appstore;
