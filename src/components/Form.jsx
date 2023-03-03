import React from "react";
import { Link } from "react-router-dom";
import Photo1 from "../assets/photo-1.webp";

const Form = () => {
  return (
    <div className="w-full">
      <img className="object-cover w-full h-screen" src={Photo1} alt="/" />

      <div className="absolute top-[20%] w-full text-center ">
        <form className="grid md:grid-cols-2 justify-center items-center mx-4 mb-6">
          <label className="text-xl md:text-2xl py-2" htmlFor="name">
            Your Name
          </label>
          <input
            placeholder="name"
            className="bg-transparent md:bg-white border-2 md:max-w-[400px] md:mt-4 w-full rounded-lg p-2 "
            type="text"
            id="name"
          />

          <label className="text-xl md:text-2xl py-2" htmlFor="email">
            Your Email
          </label>
          <input
            placeholder="email"
            className="bg-transparent md:bg-white md:max-w-[400px] border-2 md:mt-4 w-full rounded-lg p-2"
            type="email"
            id="email"
          />

          <label className="text-xl md:text-2xl py-2" htmlFor="subject">
            Your Plan
          </label>
          <input
            placeholder="text"
            className="bg-transparent md:bg-white md:max-w-[400px] w-full md:mt-4 border-2 rounded-lg p-2"
            type="email"
            id="subject"
          />

          <label className="text-xl md:text-2xl py-2" htmlFor="detail">
            {" "}
            Details
          </label>
          <textarea
            placeholder="type a short massage"
            className="bg-transparent md:bg-white md:max-w-[400px] w-full md:mt-4 border-2 rounded-lg p-2 "
            rows="3"
            cols="40"
            id="detail"
          />
        </form>
        <Link
          className="border-b-2  md:bg-white md:text-black rounded-xl text-xl  md:text-2xl  px-12 py-2 hover:text-blue-500 hover:border-2 "
          to="/contact"
        >
          <button className="md:w-3/6">Submit</button>
        </Link>
      </div>
    </div>
  );
};

export default Form;
