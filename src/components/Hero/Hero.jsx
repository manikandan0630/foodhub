import React, { useEffect, useState } from "react";
import vector from "../../assets/vector3.png";
const Hero = () => {
  const bgImage = {
    backgroundImage: `url(${vector})`,
    backgroundPosition: "center",

    baclkgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
  };

  const [data, setData] = useState(null);
  //fetch data from dummy json server
  useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=3&select=image")
      .then((res) => res.json())
      .then((dat) => setData(dat.recipes))
      .then(console.log);
  }, []);

  return (
    <>
      <div
        
        className="min-h-[500px] sm:min-h-[600px] bg-gray-200 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center"
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left  order-2 sm:order-1">
              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold">
                Welcome to <span className="py-1 px-6 bg-primary rounded-full text-white">F</span>oodhub
              </h1>
              <p className="text-xl">
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
              </p>
              <div>
                <button className="bg-gradient-to-r from-primary to-primary px-6 rounded-full py-3 text-white hover:scale-105 duration-300">
                  Order Now
                </button>
              </div>
            </div>
            <div className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] justify-center items-center mt-10 relative">
              {/*Main image */}
              <div className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden">
                <img
                  src="https://github.com/manikandan0630/restaurant/blob/main/client/src/assets/images/hero-img.png?raw=true"
                  alt=""
                  className="w-[300px] sm:w-[450px] mx-auto spin"
                />
              </div>
        

              {/* <div>
                {data&&data.map((ele) => (
                  <img key={ele.id} src={ele.image} className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105  duration-200"></img>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
