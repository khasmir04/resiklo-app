import React from "react";
import LayoutHome from "../components/Layout/LayoutHome";
import Image from "next/image";

const market = () => {
  return (
    <div id="market">
      <LayoutHome title="Market">
        <div className="flex flex-col lg:flex-row h-auto py-24 px-10 lg:h-screen lg:items-center">
          <div className="flex flex-col w-full justify-center lg:w-6/12 order-1 lg:order-0">
            <h1 className="text-primary-dark font-bold text-5xl lg:text-7xl font-rubik mb-10">
              Welcome to the Market!
            </h1>
            <p className="text-black text-lg font-dmsans">
              To start, press one of the options below. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut Lorem ipsum dolor.
            </p>
            <div className="flex flex-col mt-20 w-full lg:w-7/12">
              <a
                href="#"
                className="flex shadow bg-white rounded-2xl border-2 border-secondary py-4 px-7 mb-5 w"
              >
                <img src="" alt="tool-icon" />
                <div className="flex flex-col text-secondary-light ml-4">
                  <h3 className="font-medium text-2xl font-rubik">
                    Estimate Tool
                  </h3>
                  <p className="text-lg font-dmsans">description</p>
                </div>
              </a>
              <a
                href="#"
                className="flex shadow bg-white rounded-2xl border-2 border-secondary py-4 px-7"
              >
                <img src="" alt="shop-icon" />
                <div className="flex flex-col text-secondary-light ml-4">
                  <h3 className="font-medium text-2xl font-rubik">
                    Explore Junk Shops
                  </h3>
                  <p className="text-lg font-dmsans">description</p>
                </div>
              </a>
            </div>
          </div>
          <div className="market-image flex items-center justify-center w-full mb-5 lg:w-6/12 order-0 lg:order-1">
            <Image
              src="/assets/img/market.png"
              alt="resiklo-market"
              width={803}
              height={513}
            />
          </div>
        </div>
      </LayoutHome>
    </div>
  );
};

export default market;
