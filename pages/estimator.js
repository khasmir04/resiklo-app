import React from "react";
import SolidGreenDefault from "../components/Buttons/SolidGreenDefault";
import LayoutHome from "../components/Layout/LayoutHome";
import FormInput from "../components/Input/FormInput";

const estimator = () => {
  return (
    <div id="estimator">
      <LayoutHome>
        <div className="flex items-center lg:flex-col justify-center h-screen w-9/12">
          <div className="flex flex-col">
            <h2 className="font-rubik font-bold text-primary-dark text-7xl mb-12">
              Estimate your <br />
              Waste
            </h2>
            <p className="font-dmsans font-bold text-black text-lg mb-4">
              How much waste do you have?
            </p>
            <FormInput type="number" placeholder="ex. 1 kg/s"></FormInput>
            <p className="font-dmsans font-bold text-black text-lg mb-4">
              What kind of waste are you selling?
            </p>
            <div class="relative inline-flex">
              <svg
                class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 412 232"
              >
                <path
                  d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                  fill="#648299"
                  fill-rule="nonzero"
                />
              </svg>
              <select
                class="border-2 border-primary rounded-2xl py-2 px-3 focus:outline-none appearance-none"
                placeholder="Select your Waste"
              >
                <option>Select your Waste</option>
                <option>Plastics</option>
                <option>Bottles</option>
                <option>Papers</option>
              </select>
            </div>
            <div className="flex gap-5 mt-40">
              <SolidGreenDefault>reset</SolidGreenDefault>
              <SolidGreenDefault>estimate</SolidGreenDefault>
            </div>
          </div>
          <div className="flex flex-col bg-gray w-3/12"></div>
        </div>
      </LayoutHome>
    </div>
  );
};

export default estimator;
