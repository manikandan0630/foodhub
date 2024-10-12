// import { document } from "postcss";
import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Darkmode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  //fetch the theme mode from localstorage
  useEffect(() => {
    const element = window.document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  //change theme
  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <>
      <div className="relative" onClick={changeTheme}>
        {theme == "dark" ? (
          <MdLightMode className=" text-primary absolute -top-[11px]  " style={{fontSize:"29px"}} />
        ) : (
          <MdDarkMode className="  text-primary absolute -top-[12px] " style={{fontSize:"29px"}}/>
        )}
      </div>
    </>
  );
};

export default Darkmode;
