import React from "react";
import FormInput from "../components/Input/FormInput";
import LayoutHome from "../components/Layout/LayoutHome";

const map = () => {
  return (
    <div id="map">
      <LayoutHome title="Shop Locator">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-white p-5 rounded-2xl fixed z-10 w-screen md:max-w-[650px] xl:max-w-[900px]">
            <input
              type="text"
              placeholder="What junk shops are you looking for?"
              className="w-full border-2 border-primary text-primary rounded-2xl focus:outline-none py-2 px-4"
            />
            <div className="flex justify-center items-center mt-8 gap-2">
              <p className="uppercase text-primary-dark font-medium text-sm font-rubik">
                filter by
              </p>
              <select
                id="category"
                className="focus:outline-none border-gray rounded-2xl"
                name="category"
              >
                <option value="biodegradable">Biodegradable</option>
                <option value="non-biodegradable">Non-Biodegradable</option>
              </select>
              <select
                id="type"
                className="focus:outline-none border-gray rounded-2xl"
                ame="type"
              >
                <option value="bottle">Bottle</option>
                <option value="plastic">Plastic</option>
                <option value="paper">Paper</option>
              </select>
            </div>
          </div>
          <div className="pt-20">
            <div class="mapouter relative text-right h-screen w-screen">
              <div className="gmap_canvas">
                <iframe
                  id="gmap_canvas"
                  className="overflow-hidden bg-transparent h-screen w-screen"
                  src="https://maps.google.com/maps?q=Payatas&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
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
