import React from "react";
import { Link } from "react-router-dom";
import Video from "../assets/Solar.mp4";

const Hero = () => {
  return (
    <div className="w-full h-screen  ">
      <div className="absolute  top-0 left-0  ">
        <video className="object-cover  w-screen h-screen " src={Video} autoPlay muted loop></video>
          </div>
          <div className="absolute top-[45%] left-[10%]  ">
          <div>
              <h1 className="text-5xl font-bold md:text-7xl py-8 text-center md:text-left">Galaxy. Travel.</h1>
              <p className="text-2xl md:text-3xl pb-8 text-center font-thin">Worlds first civilian space travel in Iran.</p>
          </div>
          <div className="flex justify-around md:text-xl">
              <Link className="py-2 px-4 rounded-xl border-b-2 hover:scale-110 hover:bg-white/5 duration-300" to='/training'>Training</Link>
              <Link className="py-2 px-4 rounded-xl border-b-2 hover:scale-110 hover:bg-white/5 duration-300" to='/contact'>Register</Link>
          </div>
          </div>
    </div>
  );
};

export default Hero;
