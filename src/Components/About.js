import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKey,
  faLightbulb,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";

library.add(faKey, faLightbulb, faPaypal, faDownload);
const obj = {
  dot: "./images/dots.svg",
};
function About() {
  return (
    <div className="mt-[12%] about-head">
      <div className="about-but">
        <button className="bg-yellow-600 ml-[42%] font-medium px-3 py-3 rounded-md hover:bg-red-500 hover:text-white">
          <span className="mr-1">
            <FontAwesomeIcon icon={faDownload} />
          </span>
          Download The App
        </button>
      </div>
      <div className="flex gap-8 mt-[10%] about-body">
        <div>
          <img
            src={obj.dot}
            alt=""
            style={{ fontSize: "20px", fontWeight: "600" }}
          />
        </div>
        <div className="mt-10">
          <span className="font-bold text-3xl border-8 rounded-[55%] border-yellow-600 p-3 ml-[40%]">
            <FontAwesomeIcon icon={faKey} />
          </span>
          <h2 className="font-bold text-3xl text-center mt-10">Safe</h2>
          <p className="text-center mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            facilis?
          </p>
        </div>
        <div className="mt-10">
          <span className="font-bold text-3xl border-8 rounded-[50%] border-yellow-600 p-4 ml-[40%] text-center">
            <FontAwesomeIcon icon={faPaypal} />
          </span>
          <h2 className="font-bold text-3xl text-center mt-10">
            Easy Payments
          </h2>
          <p className="text-center mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            facilis?
          </p>
        </div>
        <div className="mt-10 ">
          <span className="font-bold text-3xl border-8 rounded-[50%] border-yellow-600 p-4 ml-[40%] text-center">
            <FontAwesomeIcon icon={faLightbulb} />
          </span>
          <h2 className="font-bold text-3xl text-center mt-10">Anytime</h2>
          <p className="text-center mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            facilis?
          </p>
        </div>
        <div>
          <img src={obj.dot} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
