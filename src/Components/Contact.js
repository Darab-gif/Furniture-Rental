import React, { forwardRef } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
library.add(faDownload);
const obj = {
  lamp: "./images/lamp.png",
  app: "./images/app.svg",
};

const Contact = forwardRef((prop, ref) => {
  return (
    <div className="mt-[10%] h-[40rem] overflow-hidden contact-div" ref={ref}>
      <div className="flex gap-24 contact">
        <div className="ml-[20%] mt-[3%]">
          <img src={obj.lamp} alt="" className="ml-10" />
          <button className="bg-yellow-600 ml-4 font-bold mt-12 px-2 py-3  rounded-md hover:bg-red-500 hover:text-white">
            <span className="mr-2">
              <FontAwesomeIcon icon={faDownload} />
            </span>
            Download App Now
          </button>
          <img
            src={obj.app}
            alt=""
            className="mt-[20%] app-img"
            style={{ width: "15rem" }}
          />
        </div>
        <form
          action=""
          className="border-solid border-4 border-gray-600 py-2 rounded-md h-[32rem] mt-[5%] w-[33rem] contact-form"
        >
          <h2 className="text-2xl font-bold text-center">Contact Us</h2>
          <label htmlFor="" className="font-medium text-xl ml-6">
            ENTER NAME
          </label>
          <br />
          <input
            type="text"
            name=""
            id=""
            className="input border-solid border-4 ml-6 outline-none rounded-md w-[90%] border-yellow-600 p-1"
          />
          <br />
          <label htmlFor="" className="font-medium text-xl ml-6">
            ENTER EMAIL
          </label>
          <br />
          <input
            type="email"
            name=""
            id=""
            className="input border-solid border-4 ml-6 outline-none rounded-md w-[90%] border-yellow-600 p-1"
          />
          <br />
          <textarea
            name=""
            id=""
            className="input border-solid border-4 ml-6 mt-5 outline-none rounded-md w-[90%] h-[40%] border-yellow-600 text-xl font-bold"
            cols="20"
            rows="10"
            placeholder="ENTER MESSAGE"
          ></textarea>
          <br />
          <input
            type="submit"
            value="Sign Up"
            className="bg-yellow-600 font-bold hover:bg-red-500 hover:text-white px-4 py-3 rounded-md ml-6 mt-8"
          />
        </form>
      </div>
    </div>
  );
});

export default Contact;
