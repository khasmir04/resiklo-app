import React from "react";
import Image from "next/image";
import TertiaryGreen from "../components/Buttons/TertiaryGreen";
import TertiaryGreenOutline from "../components/Buttons/TertiaryGreenOutline";
import LayoutHome from "../components/Layout/LayoutHome";

const estimator = () => {
  return (
    <div id="estimator">
      <LayoutHome title="Estimator">
        <div className="container m-auto flex items-center pt-24 pb-16 lg:flex-row justify-center h-auto w-full">
          <div className="flex flex-col">
            <h2 className="font-rubik font-bold text-primary-dark text-center xl:text-left text-7xl mb-12">
              Estimate your <br />
              Waste
            </h2>
            <p className="font-dmsans font-bold text-black text-lg text-center xl:text-left mb-4">
              How much waste do you have?
            </p>
            <div className="flex flex-col md:flex-row gap-3 mb-5 items-center justify-center xl:justify-end mx-auto">
              <input
                type="number"
                placeholder="ex. 1 kg/s"
                className="border-2 border-primary rounded-2xl focus:outline-none w-full py-2 px-3 "
              />
              <TertiaryGreen>kg</TertiaryGreen>
              <TertiaryGreenOutline>pcs</TertiaryGreenOutline>
            </div>
            <p className="font-dmsans font-bold text-black text-lg text-center xl:text-left mb-4">
              What kind of waste are you selling?
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center xl:justify-end mr-5">
              <div class="relative inline-flex mb-5 mr-5 mt-5">
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
              <TertiaryGreen>add</TertiaryGreen>
            </div>
            <div className="flex gap-5 justify-center mt-24 xl:justify-end">
              <TertiaryGreenOutline>reset</TertiaryGreenOutline>
              <TertiaryGreen>estimate</TertiaryGreen>
            </div>
          </div>
          <div className="bg-gray hidden xl:flex flex-col ml-10">
            <Image
              src="/assets/img/estimator/estimator.png"
              alt="resiklo-estimator"
              width="608"
              height="608"
            />
          </div>
        </div>
      </LayoutHome>
    </div>
  );
};

export default estimator;
