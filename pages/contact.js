import React from "react";
import LayoutHome from "../components/Layout/LayoutHome";
import FormInput from "../components/Input/FormInput";
import OutlineGreen from "../components/Buttons/OutlineGreen";

const contact = () => {
  return (
    <div id="contact">
      <LayoutHome>
        <div className="flex items-center justify-center py-40">
          <div className="shadow flex flex-col justify-center mx-auto items-center bg-white rounded-2xl py-11 px-28 w-[1198px]">
            <h2 className="font-rubik font-bold text-7xl text-primary-dark mb-10">
              Get In Touch
            </h2>
            <p className="font-dmsans text-lg text-black text-center mb-12">
              We want to hear your suggestions. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do
            </p>
            <div className="flex flex-col">
              <div className="flex flex-wrap gap-24">
                <FormInput
                  type="text"
                  placeholder="Enter your first name"
                  label="First Name"
                  px="px-3"
                  py="py-2"
                ></FormInput>
                <FormInput
                  type="text"
                  placeholder="Enter your last name"
                  label="Last Name"
                  px="px-3"
                  py="py-2"
                ></FormInput>
                <FormInput
                  type="email"
                  placeholder="Enter your email"
                  label="Email Address"
                  px="px-3"
                  py="py-2"
                ></FormInput>
              </div>
              <FormInput
                type="text"
                placeholder="Enter your message for us!"
                label="Message"
                px="px-5"
                height="h-32"
              ></FormInput>
            </div>
            <div className="justify-start items-center">
              <OutlineGreen>send message</OutlineGreen>
            </div>
          </div>
        </div>
      </LayoutHome>
    </div>
  );
};

export default contact;
