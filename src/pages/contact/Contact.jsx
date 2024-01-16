import React from "react";
import { FaArrowUp, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = ({ sectionRef }) => {
  return (
    <>
      <div
        className="font-sans flex justify-around items-center h-screen"
        id="contact"
        ref={sectionRef}
      >
        <div className="flex flex-col md:flex-row p-8 max-w-screen-xl w-full">
          {/* Left Column */}
          <div className="md:w-1/2 px-20">
            <h1
              className="font-bold mb-5"
              style={{
                fontSize: "35px",
                color: "#252826",
              }}
            >
              Reach out to us today
              <br /> via any of the given
              <br /> information
            </h1>

            <div className="mb-2  items-center">
              <h3 className="text-gray-600 font-semibold text-md mb-2">
                Call us for instant support
              </h3>
              <div className="flex items-center">
                <FaPhone />
                <span className="ml-2">+999 888 777</span>
              </div>
            </div>
            <div className="my-10 items-center">
              <h3 className="text-gray-600 font-semibold text-md mb-2">
                Write us by mail
              </h3>
              <div className="flex items-center">
                <FaEnvelope />
                <span className="ml-2">user@email.com</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center flex-col">
            <input
              type="text"
              placeholder="Email"
              className="border border-gray-300 p-2 mb-4 outline-none focus:border-green-400 "
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 p-2 mb-4 outline-none focus:border-green-400 "
            />

            <textarea
              placeholder="Message"
              rows="4"
              className="border border-gray-300 p-2 mb-4 outline-none focus:border-green-400 "
            />
            <button className="bg-[#3E6553] hover:bg-green-900 text-white py-2 px-4 rounded-md mt-4 flex items-center w-2/5">
              Send Message <FaArrowUp className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
