import React from "react";
import Navbar from "../components/Navbar";
import Photo from "../assets/photo-4.jpg";
import Plans from "../components/Plans";

const Training = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-full ">
        <img className="object-cover w-screen h-screen" src={Photo} alt="/" />
      </div>
      <div className="absolute w-full top-[40%]  text-center">
        <h1 className="text-5xl md:text-7xl font-bold pb-6 uppercase">
          Training
        </h1>
        <p className="text-xl md:text-3xl">Choose your plan.</p>
      </div>
      <Plans/>
    </div>
  );

};

export default Training;
