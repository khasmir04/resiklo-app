import React from "react";
import LayoutHome from "../components/Layout/LayoutHome";
import FormInput from "../components/Input/FormInput";
import SolidGreenDefault from "../components/Buttons/SolidGreenDefault";

const contact = () => {
  return (
    <div id="contact">
      <LayoutHome title="Contact">
        <div className="flex items-center justify-center py-40 backdrop-blur-[3px]">
          <div className="shadow flex flex-col justify-center mx-auto items-center bg-white rounded-2xl py-11 px-5 xl:px-28 w-full max-w-[300px] md:max-w-[600px] lg:max-w-[900px] xl:max-w-[1100px] gap-10">
            <h2 className="font-rubik font-bold text-7xl text-primary-dark mb-10">
              Get In Touch
            </h2>
            <p className="font-dmsans text-lg text-black text-justify md:text-center mb-12">
              We want to hear your suggestions. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do
            </p>
            <div className="flex flex-col">
              <div className="flex flex-row flex-wrap items-center mb-10">
                <FormInput
                  type="text"
                  placeholder="Enter your first name"
                  label="First Name"
                ></FormInput>
                <FormInput
                  type="text"
                  placeholder="Enter your last name"
                  label="Last Name"
                ></FormInput>
                <FormInput
                  type="email"
                  placeholder="Enter your email"
                  label="Email Address"
                ></FormInput>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="font-dmsans font-bold text-black text-lg font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="border-2 border-primary rounded-2xl focus:outline-none w-full px-3 py-2 mt-2"
                  rows="7"
                  placeholder="Enter your message for us!"
                ></textarea>
              </div>
            </div>
            <div className="justify-start items-center">
              <SolidGreenDefault>send message</SolidGreenDefault>
            </div>
          </div>
        </div>
      </LayoutHome>
    </div>
  );
};

export default contact;
