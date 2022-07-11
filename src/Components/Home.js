import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);
const obj = {
  logo: "./images/logo.svg",
};
const Home = () => {
  return (
    <header className="w-full h-[45rem]  bg-yellow-600 ">
      <nav className="flex justify-between py-9 cursor-pointer">
        <ul className="flex gap-6 mt-4 ml-10  ">
          <li className="font-medium text-xl">HOME</li>
          <li className="font-medium text-xl">CONTACT</li>
        </ul>
        <div>
          <img src={obj.logo} alt="Home" className="font-medium" />
        </div>
        <div className="flex gap-4 mr-14">
          <button className="bg-red-600 text-xl text-white font-medium p-3 rounded-md hover:bg-red-500">
            LOGIN
          </button>
          <button className="bg-black text-xl text-white font-medium p-2 rounded-md">
            SIGN UP
          </button>
        </div>
        <button className="p-4 lg:hidden md:flex ">
          <FontAwesomeIcon icon={faBars} style={{ fontSize: "25px" }} />
        </button>
      </nav>
    </header>
  );
};

export default Home;
