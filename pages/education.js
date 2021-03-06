import React from "react";
import LayoutHome from "../components/Layout/LayoutHome";
import Image from "next/image";
import TertiaryGreen from "../components/Buttons/TertiaryGreen";

const education = () => {
  return (
    <LayoutHome title="Education | Learn About the 3R's">
      <section
        id="education-home"
        className="container m-auto flex flex-col px-5 py-40 h-auto justify-center items-center"
      >
        <h1 className="font-rubik font-bold text-center text-6xl lg:text-7xl text-primary-dark mb-11">
          The Basics: Knowing the 3R's
        </h1>
        <p className="font-dmsans font-bold text-lg mb-14 text-justify max-w-[1050px]">
          The first step in becoming a (resiklo user) is knowing how waste is
          managed. Here is the way to a sustainable lifestyle. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-16 xl:gap-28">
          <div className="flex flex-col text-center">
            <Image
              src="/assets/img/education/reuse.png"
              alt="resiklo-market"
              width="300"
              height="268"
              className="rounded-[80px] mr-28"
            />
            <h2 className="font-rubik text-5xl text-primary-dark font-bold mt-10 mb-4">
              Reduce
            </h2>
            <p className="font-dmsans text-lg text-justify">
              Being environmentally conscious is all about being resourceful. It's important to make less waste so there's less impact on our environment. By looking for ways to reduce waste, it won't be as much of an issue in the end.
            </p>
          </div>

          <div className="flex flex-col text-center">
            <Image
              src="/assets/img/education/reduce.png"
              alt="resiklo-market"
              width="300"
              height="268"
              className="rounded-[80px] mr-28"
            />
            <h2 className="font-rubik text-5xl text-primary-dark font-bold mt-10 mb-4">
              Reuse
            </h2>
            <p className="font-dmsans text-lg text-justify">
              Reuse is the practice of taking something that is no longer needed and using it again in a new way. It helps to reduce waste by finding ways to reuse an item.
            </p>
          </div>

          <div className="flex flex-col text-center">
            <Image
              src="/assets/img/education/recycle.png"
              alt="resiklo-market"
              width="300"
              height="268"
              className="rounded-[80px]"
            />
            <h2 className="font-rubik text-5xl text-primary-dark font-bold mt-10 mb-4">
              Recycle
            </h2>
            <p className="font-dmsans text-lg text-justify">
              Recycling is the process of taking used products and turning them into new things. For example, when you put your bottles and cans in recycling bins, the bottles become plastic bottles and the cans become plastic cans.
            </p>
          </div>
        </div>
      </section>

      <section
        id="education-videos"
        className="container mx-auto flex flex-col px-5 py-10 pb-56 h-full items-center"
      >
        <h1 className="font-rubik font-bold text-5xl lg:text-7xl text-primary-dark text-center mb-16">
          Watch about Recycling
        </h1>
        <div className="flex flex-col lg:flex-row">
          <Image
            src="/assets/img/education/video1.png"
            alt="resiklo-market"
            width="770"
            height="477"
            className="rounded-[43px] object-cover hidden lg:flex"
          />
          <div className="playlist-container shadow-2xl bg-white flex flex-col rounded-2xl py-6 px-8 lg:ml-12 gap-3">
            <h3 className="font-rubik font-medium text-primary-dark text-2xl mb-4 text-center">
              View Playlist
            </h3>
            <Image
              src="/assets/img/education/video2.png"
              alt="resiklo-market"
              width="273"
              height="135"
              className="rounded-2xl object-cover mb-3"
            />
            <Image
              src="/assets/img/education/video3.png"
              alt="resiklo-market"
              width="273"
              height="135"
              className="rounded-2xl object-cover mb-3"
            />
            <Image
              src="/assets/img/education/video4.png"
              alt="resiklo-market"
              width="273"
              height="135"
              className="rounded-2xl object-cover mb-3"
            />
          </div>
        </div>
      </section>

      <section
        id="education-climate"
        className="container-fluid m-auto bg-secondary flex flex-col px-5 py-20 h-auto justify-center items-center"
      >
        <h1 className="font-rubik font-bold text-5xl lg:text-7xl text-white mb-[72px] text-center">
          About Climate Change
        </h1>
        <div className="mt-12 flex">
          <div className="flex flex-wrap md:flex-no-wrap space-x-0 md:space-x-6 mb-16">
            <div className="w-full md:w-4/7 flex flex-col justify-center items-center">
              <div className="shadow-2xl rounded-2xl rounded-r-none w-full flex flex-col md:flex-row mb-10">
                <Image
                  src="/assets/img/education/whats.png"
                  alt="whats-happening-to-the-environment"
                  width="424"
                  height="301"
                  className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                />

                <div className="bg-white px-4 py-6 rounded-2xl rounded-l-none">
                  <h3 className="text-primary-dark font-rubik font-medium text-2xl pt-10 mb-5">
                    What's Happening to the Environment
                  </h3>
                  <p className="font-dmsans text-primary-dark text-lg mb-5">
                    July 1, 2021
                  </p>
                  <div className="font-dmsans text-lg max-w-[550px] mb-5">
                    Brief Article Description. The planet has gone through
                    dramatic and detrimental environmental changes due to
                    industrialization and urbanization.
                  </div>
                  <div className="text-right">
                    <TertiaryGreen>read more</TertiaryGreen>
                  </div>
                </div>
              </div>

              <div className="shadow-2xl rounded-2xl rounded-r-none w-full flex flex-col md:flex-row mb-10">
                <Image
                  src="/assets/img/education/proper.png"
                  alt="proper-waste-management"
                  width="424"
                  height="301"
                  className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                />

                <div className="bg-white px-4 py-6 rounded-2xl rounded-l-none">
                  <h3 className="text-primary-dark font-rubik font-medium text-2xl pt-10 mb-5">
                    Proper Waste Management
                  </h3>
                  <p className="font-dmsans text-primary-dark text-lg mb-5">
                    June 10, 2021
                  </p>
                  <div className="font-dmsans text-lg max-w-[550px] mb-5">
                    Brief Article Description. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore
                  </div>
                  <div className="text-right">
                    <TertiaryGreen>read more</TertiaryGreen>
                  </div>
                </div>
              </div>

              <div className="shadow-2xl rounded-2xl rounded-r-none w-full flex flex-col md:flex-row mb-10">
                <Image
                  src="/assets/img/education/sustainable.png"
                  alt="sustainable-lifestyles"
                  width="424"
                  height="301"
                  className="block md:hidden lg:block h-64 md:h-32 m-4 md:m-0"
                />

                <div className="bg-white px-4 py-6 rounded-2xl rounded-l-none">
                  <h3 className="text-primary-dark font-rubik font-medium text-2xl pt-10 mb-5">
                    Sustainable Lifestyles
                  </h3>
                  <p className="font-dmsans text-primary-dark text-lg mb-5">
                    June 5, 2021
                  </p>
                  <div className="font-dmsans text-lg max-w-[550px] mb-5">
                    Brief Article Description. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore
                  </div>
                  <div className="text-right">
                    <TertiaryGreen>read more</TertiaryGreen>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutHome>
  );
};

export default education;
