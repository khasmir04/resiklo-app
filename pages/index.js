import LayoutHome from "../components/Layout/LayoutHome";
import React from "react";
import Slider from "react-slick";

import Image from "next/image";
import SolidBlack from "../components/Buttons/SolidBlack";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    dotsClass: "slick-dots slick-thumb",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <LayoutHome title="Home">
      <section id="home" className="bg-primary">
        <div className="container m-auto flex px-5 py-5 lg:py-24 md:flex-row flex-col-reverse items-center h-screen">
          <div className="w-full lg:w-1/2 lg:px-24 md:px-16 ">
            <div className="flex flex-col md:items-start md:text-left items-center text-center mx-auto">
              <h1 className="text-5xl lg:text-7xl mb-5 font-bold text-white">
                Reduce, Reuse, Recycle
              </h1>
              <p className="mb-20 leading-relaxed text-white text-lg">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>
              <div className="flex justify-center">
                <SolidBlack>learn more</SolidBlack>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-20 lg:p-0 mt-20 lg:mt-0 flex justify-center items-center">
            <Image
              className="object-cover object-center rounded"
              width={500}
              height={500}
              alt="hero"
              src="/assets/img/500x500.png"
            />
          </div>
        </div>
      </section>
      <section id="services">
        <div className="container px-5 py-5 lg:py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="font-rubik font-bold text-6xl mb-4 text-primary-dark">
              Our Services
            </h1>
            <p className="font-dmsans lg:w-2/3 mx-auto leading-relaxed text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <Image
                  alt="team"
                  width={288}
                  height={268}
                  className="services-img flex-shrink-0 rounded-[96px] w-full h-56 !border-solid !border-8 !border-primary object-cover object-center"
                  src="/assets/img/500x500.png"
                />
                <div className="w-full mt-6">
                  <h3 className="font-rubik font-bold text-4xl text-primary-dark mb-3">
                    Service 1
                  </h3>
                  <p className="font-dmsans mb-4 text-lg px-20">
                    {" "}
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    deserunt mollit anim id est laborum.
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <Image
                  alt="team"
                  width={288}
                  height={268}
                  className="services-img flex-shrink-0 rounded-[96px] w-full h-56 !border-solid !border-8 !border-primary object-cover object-center"
                  src="/assets/img/500x500.png"
                />
                <div className="w-full mt-6">
                  <h3 className="font-rubik font-bold text-4xl text-primary-dark mb-3">
                    Service 2
                  </h3>
                  <p className="font-dmsans mb-4 text-lg px-20">
                    {" "}
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    deserunt mollit anim id est laborum.
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <Image
                  alt="team"
                  width={288}
                  height={268}
                  className="services-img flex-shrink-0 rounded-[96px] w-full h-56 !border-solid !border-8 !border-primary object-cover object-center"
                  src="/assets/img/500x500.png"
                />
                <div className="w-full mt-6">
                  <h3 className="font-rubik font-bold text-4xl text-primary-dark mb-3">
                    Service 3
                  </h3>
                  <p className="font-dmsans mb-4 text-lg px-20">
                    {" "}
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    deserunt mollit anim id est laborum.
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="selling" className="bg-secondary px-10">
        {/* <Image
          width={321}
          height={213}
          layout="responsive"
          src="/assets/img/leaves.png"
          className=""
        ></Image> */}
        <div className="container mx-auto px-5 py-5 lg:py-24">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="font-rubik font-bold text-6xl mb-4 text-primary-dark">
              See What&apos;s Selling
            </h1>
            <p className="font-dmsans lg:w-2/3 mx-auto leading-relaxed text-lg text-black">
              Currently at the market, here’s what been recently sold. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
          </div>
          <Slider {...settings} className="mb-16">
            <div className="shadow-xl">
              <div className="bg-white rounded-[20px] rounded-b-none p-6">
                <p className="text-center font-rubik font-medium text-2xl">
                  Plastics
                </p>
                <p className="text-center font-dmsans text-lg">
                  Sold by (Nickname) last (date)
                </p>
              </div>
              <Image
                width={321}
                height={213}
                layout="responsive"
                src="/assets/img/500x500.png"
                className="object-cover"
              ></Image>
              <div className="text-white bg-white rounded-[20px] rounded-t-none p-6"></div>
            </div>
            <div className="shadow-xl">
              <div className="bg-white rounded-[20px] rounded-b-none p-6">
                <p className="text-center font-rubik font-medium text-2xl">
                  Bottles
                </p>
                <p className="text-center font-dmsans text-lg">
                  Sold by (Nickname) last (date)
                </p>
              </div>
              <Image
                width={321}
                height={213}
                layout="responsive"
                src="/assets/img/500x500.png"
                className="object-cover"
              ></Image>
              <div className="text-white bg-white rounded-[20px] rounded-t-none p-6"></div>
            </div>
            <div className="shadow-xl">
              <div className="bg-white rounded-[20px] rounded-b-none p-6">
                <p className="text-center font-rubik font-medium text-2xl">
                  Papers
                </p>
                <p className="text-center font-dmsans text-lg">
                  Sold by (Nickname) last (date)
                </p>
              </div>
              <Image
                width={321}
                height={213}
                layout="responsive"
                src="/assets/img/500x500.png"
                className="object-cover"
              ></Image>
              <div className="text-white bg-white rounded-[20px] rounded-t-none p-6"></div>
            </div>
            <div className="shadow-xl">
              <div className="bg-white rounded-[20px] rounded-b-none p-6">
                <p className="text-center font-rubik font-medium text-2xl">
                  Plastic
                </p>
                <p className="text-center font-dmsans text-lg">
                  Sold by (Nickname) last (date)
                </p>
              </div>
              <Image
                width={321}
                height={213}
                layout="responsive"
                src="/assets/img/500x500.png"
                className="object-cover"
              ></Image>
              <div className="text-white bg-white rounded-[20px] rounded-t-none p-6"></div>
            </div>
            <div className="shadow-xl">
              <div className="bg-white rounded-[20px] rounded-b-none p-6">
                <p className="text-center font-rubik font-medium text-2xl">
                  Plastic
                </p>
                <p className="text-center font-dmsans text-lg">
                  Sold by (Nickname) last (date)
                </p>
              </div>
              <Image
                width={321}
                height={213}
                layout="responsive"
                src="/assets/img/500x500.png"
                className="object-cover"
              ></Image>
              <div className="text-white bg-white rounded-[20px] rounded-t-none p-6"></div>
            </div>
            <div className="shadow-xl">
              <div className="bg-white rounded-[20px] rounded-b-none p-6">
                <p className="text-center font-rubik font-medium text-2xl">
                  Plastic
                </p>
                <p className="text-center font-dmsans text-lg">
                  Sold by (Nickname) last (date)
                </p>
              </div>
              <Image
                width={321}
                height={213}
                layout="responsive"
                src="/assets/img/500x500.png"
                className="object-cover"
              ></Image>
              <div className="text-white bg-white rounded-[20px] rounded-t-none p-6"></div>
            </div>
            <div className="shadow-xl">
              <div className="bg-white rounded-[20px] rounded-b-none p-6">
                <p className="text-center font-rubik font-medium text-2xl">
                  Plastic
                </p>
                <p className="text-center font-dmsans text-lg">
                  Sold by (Nickname) last (date)
                </p>
              </div>
              <Image
                width={321}
                height={213}
                layout="responsive"
                src="/assets/img/500x500.png"
                className="object-cover"
              ></Image>
              <div className="text-white bg-white rounded-[20px] rounded-t-none p-6"></div>
            </div>
            <div className="shadow-xl">
              <div className="bg-white rounded-[20px] rounded-b-none p-6">
                <p className="text-center font-rubik font-medium text-2xl">
                  Plastic
                </p>
                <p className="text-center font-dmsans text-lg">
                  Sold by (Nickname) last (date)
                </p>
              </div>
              <Image
                width={321}
                height={213}
                layout="responsive"
                src="/assets/img/500x500.png"
                className="object-cover"
              ></Image>
              <div className="text-white bg-white rounded-[20px] rounded-t-none p-6"></div>
            </div>
            <div className="shadow-xl">
              <div className="bg-white rounded-[20px] rounded-b-none p-6">
                <p className="text-center font-rubik font-medium text-2xl">
                  Plastic
                </p>
                <p className="text-center font-dmsans text-lg">
                  Sold by (Nickname) last (date)
                </p>
              </div>
              <Image
                width={321}
                height={213}
                layout="responsive"
                src="/assets/img/500x500.png"
                className="object-cover"
              ></Image>
              <div className="text-white bg-white rounded-[20px] rounded-t-none p-6"></div>
            </div>
          </Slider>
          <div className="text-center">
            <SolidBlack>go to the market</SolidBlack>
          </div>
        </div>
      </section>
    </LayoutHome>
  );
}
