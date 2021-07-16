import React from "react";
import Image from "next/image";
import Link from "next/link";
import LayoutUser from "../../components/Layout/LayoutUser";
import SolidBlack from "../../components/Buttons/SolidBlack";
import Slider from "react-slick";

const rewards = () => {
  const settings = {
    className: "center",
    // centerMode: true,
    arrows: true,
    dots: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 2
  };
  return (
    <LayoutUser title="Rewards">
      <section className="container px-5 py-5 lg:py-24 mx-auto mt-20">
        <div className="flex flex-wrap justify-center mb-28">
          <div className="lg:w-3/12 px-5 mb-8 lg:mb-0">
            <div className="flex justify-center bg-secondary rounded-[20px] items-center p-5 mb-8 shadow-xl">
              <Image
                src="/assets/img/profile/leaf.png"
                width={45}
                height={45}
              ></Image>
              <h3 className="font-bold text-5xl text-primary-dark mr-2">10</h3>
              <p className="font-medium text-2xl uppercase">Points to spend</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-xl py-5">
              <form action="#" className="flex flex-col items-center">
                <div className="relative text-[#A9A9A9] mb-8">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-8">
                    <button type="submit" className="p-1 text-[#45BF55] focus:outline-none focus:shadow-outline">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                  </span>
                  <input type="search" name="searchReward" className="py-2 text-lg text-[#A9A9A9] rounded-[20px] border border-tertiary pl-20 focus:outline-none focus:text-gray-900" placeholder="Search Reward" autoComplete="off" />
                </div>
                <div className="w-2/3 mb-16 flex flex-col items-center">
                  <p className="font-rubik font-medium text-primary-dark text-2xl mb-3 text-center">Sort By Points</p>
                  <hr className="border-2 border-tertiary mb-5 w-full" />
                  <div>
                    <input type="radio" className="cursor-pointer mr-3" id="available" name="sortPoints" value="available" />
                    <label className="font-bold text-lg" htmlFor="available">Available for Me</label>
                    <br />
                    <input type="radio" className="cursor-pointer mr-3" id="toHighest" name="sortPoints" value="toHighest" />
                    <label className="font-bold text-lg" htmlFor="toHighest">Lowest to Highest</label>
                    <br />
                    <input type="radio" className="cursor-pointer mr-3" id="toLowest" name="sortPoints" value="toLowest" />
                    <label className="font-bold text-lg" htmlFor="toLowest">Highest to Lowest</label>
                  </div>
                </div>
                <div className="w-2/3 mb-16 flex flex-col items-center">
                  <p className="font-rubik font-medium text-primary-dark text-2xl mb-3 text-center">Sort By Name</p>
                  <hr className="border-2 border-tertiary mb-5 w-full" />
                  <div>
                    <input type="radio" className="cursor-pointer mr-3" id="ascending" name="sortName" value="ascending" />
                    <label className="font-bold text-lg" htmlFor="ascending">A to Z</label>
                    <br />
                    <input type="radio" className="cursor-pointer mr-3" id="descending" name="sortName" value="descending" />
                    <label className="font-bold text-lg" htmlFor="descending">Z to A</label>
                  </div>
                </div>
                <div className="w-2/3">
                  <p className="font-rubik font-medium text-primary-dark text-2xl mb-3 text-center">Sort By Type</p>
                  <hr className="border-2 border-tertiary mb-5" />
                  <div className="">
                    <div className="flex flex-wrap">
                      <div className="w-1/2">
                        <input type="radio" className="cursor-pointer mr-3" id="food" name="sortType" value="food" />
                        <label className="font-bold text-lg" htmlFor="food">Food</label>
                      </div>
                      <div className="w-1/2">
                        <input type="radio" className="cursor-pointer mr-3" id="load" name="sortType" value="load" />
                        <label className="font-bold text-lg" htmlFor="load">Load</label>
                      </div>
                      <div className="w-1/2">
                        <input type="radio" className="cursor-pointer mr-3" id="drinks" name="sortType" value="drinks" />
                        <label className="font-bold text-lg" htmlFor="drinks">Drinks</label>
                      </div>
                      <div className="w-1/2">
                        <input type="radio" className="cursor-pointer mr-3" id="gift" name="sortType" value="gift" />
                        <label className="font-bold text-lg" htmlFor="gift">Gift</label>
                      </div>
                      <div className="w-1/2">
                        <input type="radio" className="cursor-pointer mr-3" id="voucher" name="sortType" value="voucher" />
                        <label className="font-bold text-lg" htmlFor="voucher">Voucher</label>
                      </div>
                      <div className="w-1/2">
                        <input type="radio" className="cursor-pointer mr-3" id="cash" name="sortType" value="cash" />
                        <label className="font-bold text-lg" htmlFor="cash">Cash</label>
                      </div>
                      <div className="w-1/2">
                        <input type="radio" className="cursor-pointer mr-3" id="Games" name="sortType" value="Games" />
                        <label className="font-bold text-lg" htmlFor="Games">Games</label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="lg:w-1/12" />
          <div className="w-full lg:w-6/12">
            <div>
              <h2 className="font-bold text-6xl text-primary-dark">Rewards</h2>
              <p className="font-bold text-black text-lg">Below are the selected rewards you can redeem.</p>
            </div>
            <div>
              <Slider {...settings}>
                <div className="p-4">
                  <div className="rounded-[20px] shadow-xl">
                    <Image
                      width={291}
                      height={214}
                      layout="responsive"
                      src="/assets/img/500x500.png"
                      className="object-cover rounded-t-[20px]"
                    ></Image>
                    <div className="bg-white text-center p-6 rounded-b-[20px]">
                      <h4 className="font-medium text-2xl">Reward 1</h4>
                      <p className="text-lg italic">Name of Company</p>
                      <p className="text-lg mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quod?</p>
                      <button className="text-white text-sm md:text-md lg:text-lg bg-tertiary py-2 px-4 md:px-8 lg:py-3 lg:px-10 rounded-[20px] border border-tertiary hover:bg-white hover:text-tertiary uppercase">Redeem</button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="rounded-[20px] shadow-xl">
                    <Image
                      width={291}
                      height={214}
                      layout="responsive"
                      src="/assets/img/500x500.png"
                      className="object-cover rounded-t-[20px]"
                    ></Image>
                    <div className="bg-white text-center p-6 rounded-b-[20px]">
                      <h4 className="font-medium text-2xl">Reward 1</h4>
                      <p className="text-lg italic">Name of Company</p>
                      <p className="text-lg mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quod?</p>
                      <button className="text-white text-sm md:text-md lg:text-lg bg-tertiary py-2 px-4 md:px-8 lg:py-3 lg:px-10 rounded-[20px] border border-tertiary hover:bg-white hover:text-tertiary uppercase">Redeem</button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="rounded-[20px] shadow-xl">
                    <Image
                      width={291}
                      height={214}
                      layout="responsive"
                      src="/assets/img/500x500.png"
                      className="object-cover rounded-t-[20px]"
                    ></Image>
                    <div className="bg-white text-center p-6 rounded-b-[20px]">
                      <h4 className="font-medium text-2xl">Reward 1</h4>
                      <p className="text-lg italic">Name of Company</p>
                      <p className="text-lg mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quod?</p>
                      <button className="text-white text-sm md:text-md lg:text-lg bg-tertiary py-2 px-4 md:px-8 lg:py-3 lg:px-10 rounded-[20px] border border-tertiary hover:bg-white hover:text-tertiary uppercase">Redeem</button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="rounded-[20px] shadow-xl">
                    <Image
                      width={291}
                      height={214}
                      layout="responsive"
                      src="/assets/img/500x500.png"
                      className="object-cover rounded-t-[20px]"
                    ></Image>
                    <div className="bg-white text-center p-6 rounded-b-[20px]">
                      <h4 className="font-medium text-2xl">Reward 1</h4>
                      <p className="text-lg italic">Name of Company</p>
                      <p className="text-lg mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quod?</p>
                      <button className="text-white text-sm md:text-md lg:text-lg bg-tertiary py-2 px-4 md:px-8 lg:py-3 lg:px-10 rounded-[20px] border border-tertiary hover:bg-white hover:text-tertiary uppercase">Redeem</button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="rounded-[20px] shadow-xl">
                    <Image
                      width={291}
                      height={214}
                      layout="responsive"
                      src="/assets/img/500x500.png"
                      className="object-cover rounded-t-[20px]"
                    ></Image>
                    <div className="bg-white text-center p-6 rounded-b-[20px]">
                      <h4 className="font-medium text-2xl">Reward 1</h4>
                      <p className="text-lg italic">Name of Company</p>
                      <p className="text-lg mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quod?</p>
                      <button className="text-white text-sm md:text-md lg:text-lg bg-tertiary py-2 px-4 md:px-8 lg:py-3 lg:px-10 rounded-[20px] border border-tertiary hover:bg-white hover:text-tertiary uppercase">Redeem</button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="rounded-[20px] shadow-xl">
                    <Image
                      width={291}
                      height={214}
                      layout="responsive"
                      src="/assets/img/500x500.png"
                      className="object-cover rounded-t-[20px]"
                    ></Image>
                    <div className="bg-white text-center p-6 rounded-b-[20px]">
                      <h4 className="font-medium text-2xl">Reward 1</h4>
                      <p className="text-lg italic">Name of Company</p>
                      <p className="text-lg mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quod?</p>
                      <button className="text-white text-sm md:text-md lg:text-lg bg-tertiary py-2 px-4 md:px-8 lg:py-3 lg:px-10 rounded-[20px] border border-tertiary hover:bg-white hover:text-tertiary uppercase">Redeem</button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="rounded-[20px] shadow-xl">
                    <Image
                      width={291}
                      height={214}
                      layout="responsive"
                      src="/assets/img/500x500.png"
                      className="object-cover rounded-t-[20px]"
                    ></Image>
                    <div className="bg-white text-center p-6 rounded-b-[20px]">
                      <h4 className="font-medium text-2xl">Reward 1</h4>
                      <p className="text-lg italic">Name of Company</p>
                      <p className="text-lg mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quod?</p>
                      <button className="text-white text-sm md:text-md lg:text-lg bg-tertiary py-2 px-4 md:px-8 lg:py-3 lg:px-10 rounded-[20px] border border-tertiary hover:bg-white hover:text-tertiary uppercase">Redeem</button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="rounded-[20px] shadow-xl">
                    <Image
                      width={291}
                      height={214}
                      layout="responsive"
                      src="/assets/img/500x500.png"
                      className="object-cover rounded-t-[20px]"
                    ></Image>
                    <div className="bg-white text-center p-6 rounded-b-[20px]">
                      <h4 className="font-medium text-2xl">Reward 1</h4>
                      <p className="text-lg italic">Name of Company</p>
                      <p className="text-lg mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quod?</p>
                      <button className="text-white text-sm md:text-md lg:text-lg bg-tertiary py-2 px-4 md:px-8 lg:py-3 lg:px-10 rounded-[20px] border border-tertiary hover:bg-white hover:text-tertiary uppercase">Redeem</button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="rounded-[20px] shadow-xl">
                    <Image
                      width={291}
                      height={214}
                      layout="responsive"
                      src="/assets/img/500x500.png"
                      className="object-cover rounded-t-[20px]"
                    ></Image>
                    <div className="bg-white text-center p-6 rounded-b-[20px]">
                      <h4 className="font-medium text-2xl">Reward 1</h4>
                      <p className="text-lg italic">Name of Company</p>
                      <p className="text-lg mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quod?</p>
                      <button className="text-white text-sm md:text-md lg:text-lg bg-tertiary py-2 px-4 md:px-8 lg:py-3 lg:px-10 rounded-[20px] border border-tertiary hover:bg-white hover:text-tertiary uppercase">Redeem</button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="rounded-[20px] shadow-xl">
                    <Image
                      width={291}
                      height={214}
                      layout="responsive"
                      src="/assets/img/500x500.png"
                      className="object-cover rounded-t-[20px]"
                    ></Image>
                    <div className="bg-white text-center p-6 rounded-b-[20px]">
                      <h4 className="font-medium text-2xl">Reward 1</h4>
                      <p className="text-lg italic">Name of Company</p>
                      <p className="text-lg mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quod?</p>
                      <button className="text-white text-sm md:text-md lg:text-lg bg-tertiary py-2 px-4 md:px-8 lg:py-3 lg:px-10 rounded-[20px] border border-tertiary hover:bg-white hover:text-tertiary uppercase">Redeem</button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="rounded-[20px] shadow-xl">
                    <Image
                      width={291}
                      height={214}
                      layout="responsive"
                      src="/assets/img/500x500.png"
                      className="object-cover rounded-t-[20px]"
                    ></Image>
                    <div className="bg-white text-center p-6 rounded-b-[20px]">
                      <h4 className="font-medium text-2xl">Reward 1</h4>
                      <p className="text-lg italic">Name of Company</p>
                      <p className="text-lg mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quod?</p>
                      <button className="text-white text-sm md:text-md lg:text-lg bg-tertiary py-2 px-4 md:px-8 lg:py-3 lg:px-10 rounded-[20px] border border-tertiary hover:bg-white hover:text-tertiary uppercase">Redeem</button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="rounded-[20px] shadow-xl">
                    <Image
                      width={291}
                      height={214}
                      layout="responsive"
                      src="/assets/img/500x500.png"
                      className="object-cover rounded-t-[20px]"
                    ></Image>
                    <div className="bg-white text-center p-6 rounded-b-[20px]">
                      <h4 className="font-medium text-2xl">Reward 1</h4>
                      <p className="text-lg italic">Name of Company</p>
                      <p className="text-lg mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quod?</p>
                      <button className="text-white text-sm md:text-md lg:text-lg bg-tertiary py-2 px-4 md:px-8 lg:py-3 lg:px-10 rounded-[20px] border border-tertiary hover:bg-white hover:text-tertiary uppercase">Redeem</button>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap md:justify-center lg:justify-end">
          <div className="mr-5 mb-5 md:mb-0">
            <Link href="/profile">
              <a>
                <SolidBlack className="uppercase">&lt; Back to Profile</SolidBlack>
              </a>
            </Link>
          </div>
          <div className="mr-5 mb-5 md:mb-0">
            <Link href="/profile/missions">
              <a>
                <SolidBlack className="uppercase">Do Missions &gt;</SolidBlack>
              </a>
            </Link>
          </div>
          <div>
            <Link href="/profile/leaderboards">
              <a>
                <SolidBlack className="uppercase">See Leaderboards &gt;</SolidBlack>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </LayoutUser>
  )
}

export default rewards
