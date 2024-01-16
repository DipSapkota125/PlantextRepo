import React from "react";

const CommonQuestion = ({ sectionRef }) => {
  return (
    <>
      <div
        className="font-sans bg-[#E6EFEB] flex justify-evenly items-center "
        id="faqs"
        ref={sectionRef}
      >
        <div className="flex flex-col md:flex-row p-8 max-w-screen-xl w-full">
          <div className="md:w-1/2 px-20 my-8">
            <h2 className="text-4xl font-bold mb-4">
              Some common questions
              <br />
              we're often asked
            </h2>

            <div className="my-10">
              <div className="flex mb-6">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="+ My flowers are falling off or dying?"
                    className="border border-gray-300 p-2 outline-none w-full placeholder-gray-700 cursor-pointer"
                    style={{ minWidth: "472px", minHeight: "52.8px" }}
                  />
                </div>
                <div className="flex items-center ml-4">
                  <input
                    type="text"
                    placeholder="+ How do i choose a plant?"
                    className="border border-gray-300 p-2 outline-none w-full placeholder-gray-700 cursor-pointer"
                    style={{ minWidth: "472px", minHeight: "52.8px" }}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex mb-6">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="+ What causes leaves to become pale?"
                    className="border border-gray-300 p-2 outline-none w-full placeholder-gray-700 cursor-pointer"
                    style={{ minWidth: "472px", minHeight: "52.8px" }}
                  />
                </div>
                <div className="flex items-center ml-4">
                  <input
                    type="text"
                    placeholder="+ How do I change the pots?"
                    className="border border-gray-300 p-2 outline-none w-full placeholder-gray-700 cursor-pointer"
                    style={{ minWidth: "472px", minHeight: "52.8px" }}
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex mb-6">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="+ What causes brown crispy leaves?"
                    className="border border-gray-300 p-2 outline-none w-full placeholder-gray-700 cursor-pointer"
                    style={{ minWidth: "472px", minHeight: "52.8px" }}
                  />
                </div>
                <div className="flex items-center ml-4">
                  <input
                    type="text"
                    placeholder="+ Why are gnats flying around my plant?"
                    className="border border-gray-300 p-2 outline-none w-full placeholder-gray-700 cursor-pointer"
                    style={{ minWidth: "472px", minHeight: "52.8px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonQuestion;
