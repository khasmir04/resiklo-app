import React from "react";
import FormInput from "../components/Input/FormInput";
import LayoutHome from "../components/Layout/LayoutHome";
import Image from "next/image";

const map = () => {
  return (
    <div id="map">
      <LayoutHome title="Shop Locator">
        <div className="flex flex-col justify-center items-center overflow-x-hidden">
          <div className="bg-white p-5 rounded-2xl fixed z-10 w-screen md:max-w-[650px] xl:max-w-[900px]">
            <div className="flex">
              <input
                type="text"
                placeholder="What junk shops are you looking for?"
                className="w-full border-2 border-primary text-primary rounded-2xl focus:outline-none py-2 px-4"
              />
            </div>
            <div className="flex justify-center items-center mt-8 gap-2">
              <p className="uppercase text-primary-dark font-medium text-sm font-rubik mr-7">
                filter by
              </p>
              <div class="relative inline-flex mr-7">
                <svg
                  class="w-3 h-3 absolute top-0 right-0 m-4 pointer-events-none"
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
                  class="border border-gray-500 rounded-2xl py-2 px-3 focus:outline-none appearance-none mr-2"
                  placeholder="Select your Waste"
                >
                  <option>Non-Biodegradable / Biodegradable</option>
                  <option>Non-Biodegradable</option>
                  <option>Biodegradable</option>
                </select>
              </div>
              <div class="relative inline-flex">
                <svg
                  class="w-3 h-3 absolute top-0 right-0 m-4 pointer-events-none"
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
                  class="border border-gray-500 rounded-2xl py-2 px-3 focus:outline-none appearance-none mr-2"
                  placeholder="Select your Waste"
                >
                  <option>Type of Trash</option>
                  <option>Plastics</option>
                  <option>Bottles</option>
                  <option>Papers</option>
                </select>
              </div>
            </div>
          </div>
          <div className="pt-20">
            <div class="mapouter relative text-right h-screen w-screen">
              <div className="gmap_canvas">
                <iframe
                  id="gmap_canvas"
                  className="overflow-hidden bg-transparent h-screen w-screen"
                  src="https://maps.google.com/maps?q=Payatas&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </LayoutHome>
    </div>
  );
};

export default map;
