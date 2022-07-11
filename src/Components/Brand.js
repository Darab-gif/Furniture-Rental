import React from "react";

const obj = {
  table: "./images/table.png",
};
function Brand() {
  return (
    <div className="flex gap-20 mt-[5%]">
      <div className="ml-[11%] mt-[16%]">
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
      <div className="mb-10 ">
        <img
          src={obj.table}
          alt=""
          style={{ width: "32rem", height: "40rem" }}
        />
        <div className="absolute -z-20 top-[151rem] right-0 h-[21rem] w-[21rem] border-8 rounded-full border-yellow-500"></div>
      </div>
    </div>
  );
}

export default Brand;
