import React from "react";
import LayoutHome from "../components/Layout/LayoutHome";
import Image from "next/image";
import SolidGreen from "../components/Buttons/SolidGreenDefault";

const faq = () => {
  return (
    <LayoutHome title="FAQ | Initiatives">
      <section
        id="education-home"
        className="container m-auto flex flex-col px-5 py-40 h-auto justify-center items-center"
      >
        <h1 className="font-rubik font-bold text-center text-6xl lg:text-7xl text-primary-dark mb-11">
          Initiatives
        </h1>
        <p className="font-dmsans font-bold text-lg mb-14 text-center max-w-[1050px]">
          We are the creators of Resiklo. We are here to inspire and challenge
          Filipinos to achieve the highest waste reduction, recycling, and reuse
          goals in the nation through innovation and creativity.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-16 xl:gap-28">
          <div className="flex flex-col text-center">
            <h2 className="font-rubik text-5xl text-primary-dark font-bold mt-10 mb-4">
              Our Mission
            </h2>
            <p className="font-dmsans text-lg text-justify">
              The purpose of our organization is to promote waste management,
              and the 3R concept of minimizing, reusing, and recycling. We aim
              to establish a world where all materials are managed properly so
              that they can be used for future generations.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-16 xl:gap-28">
            <Image
              src="/assets/img/education/recycle.png"
              alt="resiklo-market"
              width="800"
              height="600"
              className="rounded-[80px]"
            />
          </div>
        </div>
      </section>
    </LayoutHome>
  );
};

export default faq;
