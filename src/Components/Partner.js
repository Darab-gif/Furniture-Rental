import React from "react";
import "./Partner.css";
const obj = {
  spotify: "./images/spotify.svg",
  dell: "./images/dell.svg",
  cisso: "./images/cisco.svg",
  disney: "./images/disney.svg",
  deezer: "./images/deezer.svg",
  verizon: "./images/verizon.svg",
  texas: "./images/texas.svg",
};
function Partner() {
  return (
    <div className="bg-black mt-[10%] h-[35rem] partner">
      <h1 className="text-5xl font-medium text-yellow-600 text-center mt-5">
        Our Patrners
      </h1>
      <p className="text-center partner-p ml-[30%]  mt-8 text-white text-md font-medium lg:w-[32rem] md:w-[20rem]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam atque
        iusto accusamus consequuntur nulla? Dolores quasi nobis aut temporibus
        ipsum?
      </p>
      <div className="ml-[20%] mt-12">
        <div className="grid grid-cols-4 partner-body">
          <div className="bg-white h-[8rem] w-[8rem] rounded-md items-center">
            {" "}
            <img src={obj.spotify} alt="" className="self-center py-4" />
          </div>
          <div className="bg-white h-[8rem] w-[8rem] rounded-md items-center">
            <img src={obj.dell} alt="" className="self-center py-4" />
          </div>
          <div className="bg-white h-[8rem] w-[8rem] rounded-md">
            <img src={obj.cisso} alt="" className="self-center py-4" />
          </div>
          <div className="bg-white h-[8rem] w-[8rem] rounded-md">
            <img src={obj.deezer} alt="" className="self-center py-4" />
          </div>
        </div>
        <div className="ml-[10%] grid grid-cols-3 mt-10 partner-div">
          <div className="bg-white h-[8rem] w-[8rem] rounded-md">
            <img src={obj.disney} alt="" className=" py-3" />
          </div>
          <div className="bg-white h-[8rem] w-[8rem] rounded-md">
            {" "}
            <img src={obj.texas} alt="" className="self-center py-4" />
          </div>
          <div className="bg-white h-[8rem] w-[8rem] rounded-md last">
            <img src={obj.verizon} alt="" className="self-center py-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner;
