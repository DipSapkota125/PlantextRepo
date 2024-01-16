import React from "react";
import AboutImg from "../../assets/images/about.png";
import { FaArrowDown } from "react-icons/fa";
const About = ({ aboutSectionRef, sectionRef }) => {
  return (
    <>
      <div
        id="about"
        ref={sectionRef}
        className="font-sans flex justify-around items-center h-screen"
      >
        <div className="flex flex-col md:flex-row p-8 max-w-screen-xl w-full">
          {/* Right Column */}
          <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center">
            <img
              src={AboutImg}
              alt="Plant"
              className="object-cover rounded-md"
              style={{ width: "350px", height: "350px" }}
            />
          </div>
          {/* Left Column */}
          <div className="md:w-1/2 px-20">
            <h1
              className="font-bold mb-3"
              style={{
                fontSize: "35px",
                color: "#252826",
              }}
            >
              Who we really are & <br /> Why choose Us
            </h1>
            <p className="mb-4" style={{ font: "16px" }}>
              We have over 4000+ unbiased reviews and our
              <br /> customers trust our plant process and delivery.
              <br /> service every time.
            </p>
            <input type="checkbox" checked /> We always deliver on time.
            <br />
            <input type="checkbox" checked /> We give you guides to protect and
            care for your plants.
            <br />
            <input type="checkbox" checked /> We always come over for a check-up
            after sale.
            <br />
            <input type="checkbox" checked /> 100% money back guaranteed.
            <br />
            <p className="text-green-800 hover:text-green-900 font-bold py-2 cursor-pointer rounded-md mt-4 flex items-center">
              Show Now <FaArrowDown className="ml-2" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
