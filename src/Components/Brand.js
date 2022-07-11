import React from "react";
import "./Brand.css";

const obj = {
  table: "./images/table.png",
};
function Brand() {
  return (
    <div className="flex gap-20 mt-[5%] brand">
      <div className="ml-[11%] mt-[16%] brand-div">
        <h1 className="text-4xl font-bold">Relax, You're Home!</h1>
        <p className="w-[30rem] leading-18 mt-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dolore
          voluptatem dolores optio sed ut rem, libero expedita quam ex. <br />{" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id similique
          tempora minima eaque cum libero voluptatibus ex! Voluptates, corrupti
          ducimus.
        </p>
        <button className="px-5 py-2 bg-yellow-600 font-bold rounded-md mt-8 hover:bg-red-500 hover:text-white">
          Sign Up
        </button>
      </div>
      <div className="mb-10 brand-img">
        <img src={obj.table} alt="" className="h-[40rem] w-[32rem]" />
        <div className="absolute brand-circle -z-20 top-[151rem] right-0 h-[21rem] w-[21rem] border-8 rounded-full border-yellow-500"></div>
      </div>
    </div>
  );
}

export default Brand;
