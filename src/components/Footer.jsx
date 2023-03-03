import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaSearchLocation,
  FaMailBulk,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full  ">
      <div className="grid md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold text-center p-4">About the company</h1>
          <p className="px-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
            nam explicabo! Molestiae, voluptas, dicta accusamus voluptatibus
            reiciendis vero omnis alias maiores, rem porro quaerat laudantium.
          </p>
          <div className="flex justify-between px-6 py-4">
            <FaInstagram size={30} />
            <FaTwitter size={30} />
            <FaFacebookF size={30} />
            <FaLinkedin size={30} />
          </div>
        </div>
        <div className="p-4 flex flex-col md:justify-around md:text-xl">
          <div className="flex justify-center items-center  gap-4">
            <FaSearchLocation />
            <p>Iran, Mashhad, ST chaman,36 chaman</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <FaPhone /> <p>1-800-123-1234</p>
          </div>
          <div className="flex justify-center items-center gap-4"><FaMailBulk /> <p>trip@galaxy.com</p></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
