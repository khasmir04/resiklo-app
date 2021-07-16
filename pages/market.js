import React from "react";
import LayoutHome from "../components/Layout/LayoutHome";

const market = () => {
  return (
    <div id="market">
      <LayoutHome title="Market">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-primary-dark font-bold text-7xl font-rubik mb-10">
            Welcome to the Market!
          </h1>
          <p className="text-black text-lg font-dmsans text-center max-w-[900px]">
            To start, press one of the options below. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod.
          </p>
          <div className="flex flex-row mt-24">
            <div className="shadow bg-white rounded-2xl border-2 border-secondary py-6 px-7 mr-12">
              <div className="flex">
                <img src="" alt="tool-icon" />
                <div className="flex flex-col text-secondary-light ml-4">
                  <h3 className="font-medium text-2xl font-rubik">
                    Estimate Tool
                  </h3>
                  <p className="text-lg font-dmsans">description</p>
                </div>
              </div>
            </div>
            <div className="shadow bg-white rounded-2xl border-2 border-secondary py-6 px-7">
              <div className="flex">
                <img src="" alt="shop-icon" />
                <div className="flex flex-col text-secondary-light ml-4">
                  <h3 className="font-medium text-2xl font-rubik">
                    Explore Junk Shops
                  </h3>
                  <p className="text-lg font-dmsans">description</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutHome>
    </div>
  );
};

export default market;
