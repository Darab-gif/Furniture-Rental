import React from "react";
import "./Furniture.css";
const obj = {
  couch: "./images/couch.png",
  app: "./images/app.svg",
};
function Furniture() {
  return (
    <div>
      <div className="bg-yellow-600 h-auto">
        <img
          src={obj.couch}
          alt=""
          className=" absolute top-[50%] left-5 couch"
        />
        <img
          src={obj.app}
          alt=""
          className="absolute left-[38%] top-[40%] app w-[18rem]"
        />
      </div>
    </div>
  );
}

export default Furniture;
