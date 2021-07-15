import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FormInput from "../components/Input/FormInput";
import LayoutHome from "../components/Layout/LayoutHome";

const map = () => {
  return (
    <div id="map">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="bg-white p-5 rounded-2xl fixed z-10 w-screen md:max-w-[650px] xl:max-w-[900px]">
          <input
            type="text"
            placeholder="What junk shops are you looking for?"
            className="w-full border-2 border-primary text-primary rounded-2xl focus:outline-none py-2 px-4"
          />
          <p className="uppercase text-primary-dark font-medium text-sm font-rubik mt-8">
            filter by
          </p>
        </div>
        <div className="pt-20">
          <div class="mapouter relative text-right h-[516px] w-screen">
            <div className="gmap_canvas">
              <iframe
                id="gmap_canvas"
                className="overflow-hidden bg-transparent h-[516px] w-screen"
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
      <Footer />
    </div>
  );
};

export default map;
