import React, { useState } from "react";
import "./Home.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const obj = {
  logo: "./images/logo.svg",
};
const Home = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav((nav) => !nav);
  };
  return (
    <header className="w-full h-[45rem]  bg-yellow-600 home">
      <div className="absolute left-[30%] top-[5%] nav-logo">
        <img src={obj.logo} alt="Home" className="font-medium" />
      </div>
      <nav className="flex justify-between py-9 cursor-pointer menu">
        <ul className="flex gap-6 mt-4 ml-10  menu-ul">
          <li className="font-medium text-xl">HOME</li>
          <li className="font-medium text-xl">CONTACT</li>
        </ul>

        <div className="flex gap-4 mr-14 menu-button">
          <button className="bg-red-600 text-xl text-white font-medium p-3 rounded-md hover:bg-red-500">
            LOGIN
          </button>
          <button className="bg-black text-xl text-white font-medium p-2 rounded-md">
            SIGN UP
          </button>
        </div>
      </nav>
      <div onClick={handleClick} className="lg:hidden menu-bar">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
    </header>
  );
};

export default Home;
