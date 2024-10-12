import React from "react";
import Catering from "../../assets/fi-rr-salad.png";
import Delivery from "../../assets/fi-rr-time-fast.png";
import ShoppingCart from "../../assets/fi-rr-shopping-cart-check.png";
import Gift from "../../assets/fi-rr-gift.png";
const Services = () => {
  return (
    <>
      <div className="container py-10 grid grid-cols-1 sm:grid-cols-2 place-items-center gap-32">
        {/*service text section */}
        <div className="flex flex-col sm:items-start items-center sm:text-start mx-auto text-center gap-6 ">
          <p className="text-xs font-bold bg-clip-text bg-gradient-to-r text-transparent from-special to-special">
            OUR STORY & SERVICES
          </p>
          <h1 className="font-bold dark:text-gray-500 text-gray-700 text-xl sm:text-2xl md:text-4xl ">
            Our Culinary Journey<br /> And Services
          </h1>
          <p className=" text-sm sm:text-xl  ">
            Rooted in passion, we curate unforgettable diningexperiences and
            offer exceptional services, blending culinary artistry with warm
            hospitality.
          </p>
          <button className="px-5 py-2 bg-gradient-to-r text-white rounded-full from-primary to-primary">
            Explore
          </button>
        </div>

        {/*service cart section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 sm:mt-0 ">
          <div className="px-7 max-w-[270px] py-10 bg-white shadow-xl shadow-gray-300 rounded-xl dark:bg-gray-800 dark:text-gray-400   grid grid-col-1 gap-3 place-items-center text-center">
            <img src={Catering} alt="catering"  />
            <h3 className="dark:text-white font-bold text-primary ">CATERING</h3>
            <p className="text-xs sm:text-sm " style={{color:"#90BD95"}}>Delight you guests with our favors and presentation</p>
          </div>
          <div className="px-7 max-w-[270px]  py-10 bg-white shadow-xl shadow-gray-300 rounded-xl dark:bg-gray-800 dark:text-gray-400 grid grid-col-1 gap-3 place-items-center text-center  ">
            <img src={Delivery} alt="Fast delivery"  />
            <h3 className="dark:text-white font-bold text-primary">FAST DELIVERY</h3>
            <p className="text-xs sm:text-sm" style={{color:"#90BD95"}}> We deliver your order promptly to your door</p>
          </div>
          <div className="px-7 max-w-[270px]  py-10 bg-white shadow-xl shadow-gray-300 rounded-xl dark:bg-gray-800 dark:text-gray-400 grid grid-col-1 gap-3 place-items-center text-center ">
            <img src={ShoppingCart} alt="shoppin gcart"  />
            <h3 className="dark:text-white font-bold text-md text-primary">ONLINE ORDERING</h3>
            <p className="text-xs sm:text-sm text-center" style={{color:"#90BD95"}}>Explore menu & order with ease using our Online Ordering </p>
          </div>
          <div className="px-7  max-w-[270px]  py-10 bg-white shadow-xl shadow-gray-300 rounded-xl  dark:bg-gray-800 dark:text-gray-400 grid grid-col-1 gap-3 place-items-center text-center ">
            <img src={Gift} alt="gift cards"  />
            <h3 className="dark:text-white font-bold text-primary ">GIFT CARDS</h3>
            <p className="text-xs sm:text-sm text-center" style={{color:"#90BD95"}}>Give the gift of exceptional dining with Foodi Gift Cards</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
