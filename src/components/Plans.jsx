import React from "react";
import { Link } from "react-router-dom";
import PhotoP1 from "../assets/photo-3.webp";
import PhotoP2 from "../assets/photo-2.webp";

const Plans = () => {
  return (
    <div>
      <div className="text-center m-6 ">
        <h1 className="text-3xl font-bold mb-4">Plans</h1>
        <p className="mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          voluptate voluptas dolor et nobis placeat.
        </p>
        <button className="border-b-2 px-8 py-2 rounded-lg hover:scale-110 hover:text-blue-600 duration-300">
          <Link to="/">Contact</Link>
        </button>
      </div>
      <div className="grid md:grid-cols-2 mx-auto max-w-[1140px] gap-x-8">
        <div className="text-center my-6">
          <img className="w-full h-[400px]" src={PhotoP1} alt="/" />
          <h1 className="my-4 text-3xl font-bold">
            Plan <span className=" text-red-600">Space</span>
          </h1>
          <p className="mx-6 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, iusto? Doloremque aliquid animi praesentium accusamus
            eius aut ullam provident? Harum delectus est distinctio, autem
            inventore ex velit rerum quod ipsum!
          </p>
          <div className="mx-12">
            <p className="text-2xl my-4 w-full border-b-2 py-4 text-center">
              60 days
            </p>
            <p className="text-2xl my-4 w-full border-b-2 py-4 text-center">
              100 K
            </p>
            <p className="text-2xl my-4 w-full border-b-2 py-4 text-center">
              Foods
            </p>
            <p className="text-2xl my-4 w-full border-b-2 py-4 text-center">
              Practice
            </p>
            <button className="border-b-2 w-full  py-4 rounded-lg hover:scale-110 hover:text-blue-600 duration-300">
              <Link to="/">Choose</Link>
            </button>
          </div>
        </div>
        <div className="text-center my-6">
          <img className="w-full h-[400px]" src={PhotoP2} alt="/" />
          <h1 className="my-4 text-3xl font-bold">
            Plan <span className=" text-blue-600">Moon</span>
          </h1>
          <p className="mx-6 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, iusto? Doloremque aliquid animi praesentium accusamus
            eius aut ullam provident? Harum delectus est distinctio, autem
            inventore ex velit rerum quod ipsum!
          </p>
          <div className="mx-12">
            <p className="text-2xl my-4 w-full border-b-2 py-4 text-center">
              100 days
            </p>
            <p className="text-2xl my-4 w-full border-b-2 py-4 text-center">
              200 K
            </p>
            <p className="text-2xl my-4 w-full border-b-2 py-4 text-center">
              Foods
            </p>
            <p className="text-2xl my-4 w-full border-b-2 py-4 text-center">
              Practice
            </p>
            <button className="border-b-2 w-full  py-4 rounded-lg hover:scale-110 hover:text-blue-600 duration-300">
              <Link to="/">Choose</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
