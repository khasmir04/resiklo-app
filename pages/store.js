import React from "react";
import Image from "next/image";
import LayoutHome from "../components/Layout/LayoutHome";
import SolidBlack from "../components/Buttons/SolidBlack";

const store = () => {
  return (
    <div id="store">
      <LayoutHome title="Shop Profile">
        <div className="flex flex-col items-center">
          <div className="gallery md:flex pt-40 w-full justify-center gap-10">
            <Image
              src="/assets/img/store/main.png"
              alt="resiklo-market"
              width="692"
              height="475"
              className="rounded-2xl object-cover"
            />
            <div className="flex flex-col gap-7">
              <Image
                src="/assets/img/store/upper.png"
                alt="resiklo-market"
                width="513"
                height="236"
                className="rounded-2xl"
              />
              <Image
                src="/assets/img/store/lower.png"
                alt="resiklo-market"
                width="513"
                height="236"
                className="rounded-2xl"
              />
            </div>
          </div>
          <div className="shadow-2xl -mt-40 z-10 store-profile flex flex-col bg-white rounded-2xl py-14 px-16 justify-center max-w-[300px] md:max-w-[700px] xl:max-w-[1198px] mb-16">
            <div className="flex flex-col items-start xl:flex-row xl:items-center xl:justify-between">
              <h2 className="font-rubik font-bold text-5xl xl:text-7xl text-primary-dark mb-6">
                ABC Junk Shop
              </h2>
              <p className="text-primary-dark font-bold text-lg font-dmsans text-right">
                Metro Manila
              </p>
            </div>
            <h3 className="text-secondary-light font-rubik font-medium text-2xl my-2">
              About
            </h3>
            <p className="font-dmsans text-lg mb-5">
              A Philippine company, located in 18-B, Ilang Ilang Street, Brgy.
              Payatas, Metro Manila, Philippines.
            </p>

            <h3 className="text-secondary-light font-rubik font-medium text-2xl mb-2">
              Collects
            </h3>
            <p className="font-dmsans text-lg mb-5">
              Plastic, Bottle, Metal, Copper, Carton
            </p>

            <div className="flex flex-col items-start justify-between xl:items-center xl:flex-row ">
              <div>
                <h3 className="text-secondary-light font-rubik font-medium text-2xl mb-2">
                  Schedule / Opening Hours
                </h3>
                <p className="font-dmsans text-lg mb-5">
                  Monday-Friday @ 7:00 AM - 5:00 PM
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
