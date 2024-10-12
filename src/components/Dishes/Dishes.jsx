import React, { useEffect, useState } from "react";

const Service = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=9")
      .then((res) => res.json())
      .then((dat) => setData(dat.recipes))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="py-10 ">
        <div className="container">
          {/*header section */}
          <div className="text-center mb-20 max-w-[450px] mx-auto">
            <p className="text-md bg-clip-text mb-2 bg-gradient-to-r text-transparent from-special to-special font-bold">
              Special Dishes
            </p>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Standout Dishes
            </h1>
            {/* <p className="text-md py-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              quisquam nobis delectus voluptas, reprehenderit inventore
              repudiandae est, necessitatibus ab animi, minus optio hic velit
              distinctio incidunt expedita aut eum accusantium.
            </p> */}
          </div>

          {/*cart section*/}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-8  place-items-center ">
              {data && data.length > 0 ? (
                data.map((ele) => (
                  <div
                    key={ele.id}
                    className="shadow-lg dark:bg-gray-800 dark:text-white bg-gray-50 shadow-gray-400 py-6 px-4 max-w-[380px] rounded-xl h-full"
                  >
                    <div className="flex justify-center mb-4">
                      <img
                        className="max-w-[250px] mx-auto max-h-[250px]  transform duration-300 rounded-full "
                        src={ele.image}
                        alt="image"
                      />
                    </div>
                    <div className="text-center">
                      <h1 className="font-bold text-xl mb-2  ">{ele.name}</h1>
                      <p className="  text-sm   dark:text-textcolor">
                        {ele.ingredients}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p>Loading.....</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
