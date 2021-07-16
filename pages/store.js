import React from "react";
import Image from "next/image";
import LayoutHome from "../components/Layout/LayoutHome";
import SolidBlack from "../components/Buttons/SolidBlack";

const store = () => {
  return (
    <div id="store">
      <LayoutHome>
        <div className="flex flex-col items-center">
          <div className="gallery flex pt-40">
            <Image
              src="/assets/img/market.png"
              alt="resiklo-market"
              width="400"
              height="300"
            />
            <div className="flex flex-col">
              <Image
                src="/assets/img/market.png"
                alt="resiklo-market"
                width="400"
                height="300"
              />
              <Image
                src="/assets/img/market.png"
                alt="resiklo-market"
                width="400"
                height="300"
              />
            </div>
          </div>
          <div className="shadow-2xl -mt-40 z-10 store-profile flex flex-col bg-white rounded-2xl py-14 px-16 justify-center max-w-[300px] md:max-w-[700px] xl:max-w-[1198px]">
            <div className="flex flex-col items-start xl:flex-row xl:items-center xl:justify-between">
              <h2 className="font-rubik font-bold text-5xl xl:text-7xl text-primary-dark mb-6">
                Name of Junk Shop
              </h2>
              <p className="text-primary-dark font-bold text-lg font-dmsans text-right">
                Quezon City
              </p>
            </div>
            <h3 className="text-secondary-light font-rubik font-medium text-2xl my-2">
              Description
            </h3>
            <p className="font-dmsans text-lg mb-5">
              Here is a short description of the Name of Junk Store. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod
            </p>

            <h3 className="text-secondary-light font-rubik font-medium text-2xl mb-2">
              Collects
            </h3>
            <p className="font-dmsans text-lg mb-5">
              Plastic, Bottle, Waste1, Waste2, Waste3,...
            </p>

            <div className="flex flex-col items-start justify-between xl:items-center xl:flex-row ">
              <div>
                <h3 className="text-secondary-light font-rubik font-medium text-2xl mb-2">
                  Schedule / Opening Hours
                </h3>
                <p className="font-dmsans text-lg mb-5">
                  Monday-Saturday 9:00 am
                </p>
              </div>
              <SolidBlack>contact</SolidBlack>
            </div>
          </div>
        </div>
      </LayoutHome>
    </div>
  );
};

export default store;
