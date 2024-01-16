import React from "react";
import Card1 from "../../assets/images/card1.png";
import Card2 from "../../assets/images/card2.png";
import Card3 from "../../assets/images/card3.png";
import Card4 from "../../assets/images/card4.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { RiLeafLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="font-sans bg-white p-8">
      <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto px-24">
        {/* Column 1: Plantex */}
        <div className="flex-1 md:w-1/4 mb-4 md:mb-0 mr-8">
          {" "}
          {/* Added margin-right */}
          <h2 className="text-lg flex mb-6 hover:text-green-800 text-transform: uppercase">
            <RiLeafLine className="text-2xl font-bold mr-2" /> Plantex
          </h2>
          <h2 className="text-xl text-gray-600 font-semibold">
            Subscribe to our newsletter
            <br /> to stay updated.
          </h2>
          <div className=" flex items-center my-12">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-400 py-2 px-4 rounded-l-md w-48 outline-none"
            />
            <button className="bg-[#3E6553] text-white py-2 px-2 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>

        {/* Column 2: Our address */}
        <div className="flex-1 md:w-1/4 mb-4 md:mb-0 ">
          <h3 className="text-lg font-bold mb-6">Our Address</h3>
          <p className="mb-2">1234 - Peru</p>
          <p className="mb-2">La Libertad - 43210</p>
          <p className="mb-2">123-456-789</p>
        </div>

        {/* Column 3: Contact Us */}
        <div className="flex-1 md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-6">Contact Us</h3>
          <p className="mb-2">Email: info@plantex.com</p>
          <p className="mb-2">Phone: +999 888 777</p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 cursor-pointer">
            <FaFacebook size={24} color="#3E6553" />
            <FaInstagram size={24} color="#3E6553" />
            <FaTwitter size={24} color="#3E6553" />
          </div>
        </div>

        {/* Column 4: We accept all credit cards */}
        <div className="flex-1 md:w-1/4">
          <h3 className="text-lg font-bold mb-6">We Accept All Credit Cards</h3>
          <div className="flex space-x-4">
            <img src={Card1} alt="Card 1" className="h-8" />
            <img src={Card2} alt="Card 2" className="h-8" />
            <img src={Card3} alt="Card 3" className="h-8" />
            <img src={Card4} alt="Card 4" className="h-8" />
          </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="text-center mt-8 text-gray-600">
        © Bedimcode. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
