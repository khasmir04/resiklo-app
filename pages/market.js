import React from "react";
import LayoutHome from "../components/Layout/LayoutHome";
import Image from "next/image";

const market = () => {
  return (
    <div id="market">
      <LayoutHome title="Market">
        <div className="flex flex-col 2xl:flex-row h-auto py-24 px-10 2xl:h-screen 2xl:items-center">
          <div className="flex flex-col items-center w-full 2xl:w-7/12 order-1 2xl:order-0">
            <h1 className="text-primary-dark font-bold text-5xl lg:text-7xl font-rubik mb-10 mt-16 2xl:mt-0">
              Welcome to the Market!
            </h1>
            <p className="text-black text-lg font-dmsans max-w-[800px]">
              To start, press one of the options below! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Alias quasi porro explicabo
              atque pariatur velit numquam sed quo doloremque minus, similique
              quia iure modi dolorem. Magni quos explicabo ut. Libero!
            </p>
            <div className="flex flex-col mt-20 w-full 2xl:w-7/12 items-center 2xl:items-start justify-start">
              <div className="flex shadow bg-white rounded-2xl border-2 border-secondary w-full py-4 px-7 mb-5">
                <Image
                  src="/assets/img/market/estimate.png"
                  alt="resiklo-tool-icon"
                  width="64"
                  height="64"
                />
                <div className="flex flex-col text-secondary-light ml-4">
                  <h3 className="font-medium text-2xl font-rubik">
                    Estimate Tool
                  </h3>
                  <p className="text-lg font-dmsans">Calculate your Earnings</p>
                </div>
              </div>
              <div className="flex shadow bg-white rounded-2xl border-2 border-secondary w-full py-4 px-7">
                <Image
                  src="/assets/img/market/explore.png"
                  alt="resiklo-shop-icon"
                  width="64"
                  height="64"
                />
                <div className="flex flex-col text-secondary-light ml-4">
                  <h3 className="font-medium text-2xl font-rubik">
                    Explore Junk Shops
                  </h3>
                  <p className="text-lg font-dmsans">Browse nearby shops</p>
                </div>
              </div>
            </div>
          </div>
          <div className="market-image flex items-center justify-center w-full 2xl:w-5/12 order-0 2xl:order-1">
            <Image
              src="/assets/img/market/market.png"
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
