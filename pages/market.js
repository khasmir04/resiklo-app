import React from "react";
import LayoutHome from "../components/Layout/LayoutHome";

const market = () => {
  return (
    <div id="market">
      <LayoutHome title="Market">
        <div className="flex flex-col">
          <h1 className="text-primary-dark font-bold text-7xl font-rubik">
            Welcome to the Market!
          </h1>
          <p className="text-black text-lg font-dmsans text-center">
            To start, press one of the options below. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod.
          </p>
        </div>
        <div className="flex flex-row">
          <div className="bg-white rounded"></div>
        </div>
      </LayoutHome>
    </div>
  );
};

export default market;
