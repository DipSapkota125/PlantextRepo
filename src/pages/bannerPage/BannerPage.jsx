import React from "react";
import PlantImg from "../../assets/images/home.png";
import { FaArrowDown } from "react-icons/fa";
const BannerPage = ({ handleExploreClick }) => {
  return (
    <>
      <div className="font-sans flex justify-around items-center h-screen">
        <div className="flex flex-col md:flex-row p-8 max-w-screen-xl w-full">
          {/* Left Column */}
          <div className="md:w-1/2 px-24">
            <h1
              className="font-bold mb-3"
              style={{
                fontSize: "52px",
                color: "#252826",
              }}
            >
              Plants will make <br /> your life better
            </h1>
            <p className="mb-4" style={{ font: "16px" }}>
              Create incredible plant design for your offices
              <br /> or apartments. Add freshness to your new
              <br /> ideas.
            </p>
            <button
              onClick={handleExploreClick}
              className="bg-[#3E6553] hover:bg-green-900 text-white font-bold py-2 px-4 rounded-md mt-4 flex items-center"
            >
              Explore <FaArrowDown className="ml-2" />
            </button>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center">
            <img
              src={PlantImg}
              alt="Plant"
              className="object-cover rounded-md"
              style={{ width: "350px", height: "350px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerPage;
