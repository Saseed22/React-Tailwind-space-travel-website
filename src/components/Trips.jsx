import React from "react";
import { Link } from "react-router-dom";

const Trips = () => {
  return (
    <div className="w-full m-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 mx-8">
        <div className="border rounded-2xl my-8 mx-12 md:mx-4 bg-gray-900/90 text-center p-8">
          <h3 className="text-3xl font-bold mb-4">Basic</h3>
          <span className="italic ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            aperiam autem rem at minus veniam.
          </span>
          <p className="py-2 text-2xl text-blue-500 font-bold"> 1 BTC </p>
          <p className="py-2 text-xl"> 3 Days -</p>
          <p className="py-2 text-xl"> Views -</p>
          <p className="py-2 text-xl"> Featured -</p>
          <p className="py-2 text-xl mb-2"> Private Quarters -</p>
          <Link
            className="border-b-2 rounded-xl  px-12 py-2 hover:text-blue-500 hover:border-2 text-xl"
            to="/contact"
          >
            Book
          </Link>
        </div>
        <div className="border rounded-2xl my-8 mx-12 md:mx-4  bg-gray-900/90 text-center p-8">
          <h3 className="text-3xl font-bold mb-4">Economic</h3>
          <span className="italic ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            aperiam autem rem at minus veniam.
          </span>
          <p className="py-2 text-2xl text-blue-500 font-bold"> 2.5 BTC </p>
          <p className="py-2 text-xl"> 30 Days -</p>
          <p className="py-2 text-xl"> Views -</p>
          <p className="py-2 text-xl"> Featured -</p>
          <p className="py-2 text-xl mb-2"> Private Quarters -</p>
          <Link
            className="border-b-2 rounded-xl  px-12 py-2 hover:text-blue-500 hover:border-2 text-xl"
            to="/contact"
          >
            Book
          </Link>
        </div>
        <div className="border rounded-2xl my-8 mx-12 md:mx-4  bg-gray-900/90 text-center p-8">
          <h3 className="text-3xl font-bold mb-4">Advance</h3>
          <span className="italic ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            aperiam autem rem at minus veniam.
          </span>
          <p className="py-2 text-2xl text-blue-500 font-bold"> 5 BTC </p>
          <p className="py-2 text-xl"> 7 Days -</p>
          <p className="py-2 text-xl"> Views -</p>
          <p className="py-2 text-xl"> Featured -</p>
          <p className="py-2 text-xl mb-2"> Private Quarters -</p>
          <Link
            className="border-b-2 rounded-xl  px-12 py-2 hover:text-blue-500 hover:border-2 text-xl"
            to="/contact"
          >
            Book
          </Link>
        </div>
        <div className="border rounded-2xl my-8 mx-12 md:mx-4  bg-gray-900/90 text-center p-8">
          <h3 className="text-3xl font-bold mb-4">Pro Advance</h3>
          <span className="italic ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            aperiam autem rem at minus veniam.
          </span>
          <p className="py-2 text-2xl text-blue-500 font-bold"> 10 BTC </p>
          <p className="py-2 text-xl"> 7 Days -</p>
          <p className="py-2 text-xl"> Views -</p>
          <p className="py-2 text-xl"> Featured -</p>
          <p className="py-2 text-xl mb-2"> Private Quarters -</p>
          <Link
            className="border-b-2 rounded-xl  px-12 py-2 hover:text-blue-500 hover:border-2 text-xl"
            to="/contact"
          >
            Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Trips;
