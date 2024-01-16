import React from "react";

const PlantSteps = () => {
  return (
    <>
      <div className="font-sans flex justify-around items-center h-screen">
        <div className="flex flex-col md:flex-row p-8 max-w-screen-xl w-full px-28">
          <div className="bg-[#3E6553] rounded-md p-8 text-white text-center px-24">
            <h2 className="text-4xl font-bold mb-4 my-5">
              Steps to start your <br /> plants off right
            </h2>
            <div className="flex justify-around py-4">
              <div className="bg-white rounded-md p-6 m-2 text-gray-700 text-left">
                <p className="text-4xl text-green-900 font-bold mb-2">01</p>
                <h2 className="text-black font-bold mb-2">Choose Plant</h2>
                <p>We have several varieties of plants you can choose from.</p>
              </div>
              <div className="bg-white rounded-md p-6 m-2 text-gray-700 text-left">
                <p className="text-4xl text-green-900 font-bold mb-2">02</p>
                <h2 className="text-black font-bold mb-2">Plant Care</h2>
                <p>Learn about proper care techniques for your chosen plant.</p>
              </div>
              <div className="bg-white rounded-md p-6 m-2 text-gray-700 text-left">
                <p className="text-4xl text-green-900 font-bold mb-2">03</p>
                <h2 className="text-black font-bold mb-2">Enjoy Your Plants</h2>
                <p>
                  Experience the benefits of having healthy and happy plants at
                  home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantSteps;
