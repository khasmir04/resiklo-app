import React from "react";
import Image from "next/image";
import Link from "next/link";
import LayoutUser from "../../components/Layout/LayoutUser";
import SolidBlack from "../../components/Buttons/SolidBlack";

const profile = () => {
  return (
    <LayoutUser title="Profile">
      <section className="container px-5 py-5 lg:py-24 mx-auto mt-20">
        <div className="flex justify-center items-center mx-auto py-10 bg-secondary rounded-[20px] mb-20">
          <div className="mr-[76px] flex items-center justify-center">
            <Image width={154} height={154} src="/assets/img/profile-avatar.png"></Image>
          </div>
          <div className="">
            <h3 className="font-rubik font-bold text-5xl text-primary-dark mb-2">Hello (Profile Name) !</h3>
            <p className="font-bold text-lg uppercase mb-4">
              LEVEL 100       |       (NO. OF POINTS) EARNED
            </p>
            <p className="text-lg">
              Well Done! You have recycled (no. of kg) amount of trash.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mb-20">
          <div className="flex-grow lg:w-1/2 p-8">
            <div className="flex justify-between mb-6">
              <p className="text-tertiary font-rubik font-medium text-2xl">Current Exchanges</p>
              <Link href="/profile#">
                <a className="text-gray font-bold text-right text-lg hover:text-tertiary uppercase">See All</a>
              </Link>
            </div>
            <div className="bg-[#FFCE40] rounded-[20px] flex justify-start items-center py-4 px-9 mb-6 cursor-pointer transform hover:scale-105 duration-100 shadow-xl">
              <Image width={74} height={74} src="/assets/img/profile/clock.png"></Image>
              <div className="ml-5">
                <p className="font-bold text-lg uppercase">In Progress</p>
                <p className="text-lg">1.5kg Plastic Bottles to ABC Junk Store</p>
              </div>
            </div>
            <div className="bg-[#BBFBF7] rounded-[20px] flex justify-start items-center py-4 px-9 mb-6 cursor-pointer transform hover:scale-105 duration-100 shadow-xl">
              <Image width={74} height={74} src="/assets/img/profile/money.png"></Image>
              <div className="ml-5">
                <p className="font-bold text-lg uppercase">Waiting for Payment</p>
                <p className="text-lg">1.5kg Plastic Bottles to ABC Junk Store</p>
              </div>
            </div>
          </div>
          <div className="flex-grow lg:w-1/2 p-8">
            <div className="flex justify-between mb-6">
              <p className="text-tertiary font-rubik font-medium text-2xl">Recent Exchanges</p>
              <Link href="/profile#">
                <a className="text-gray font-bold text-right text-lg hover:text-tertiary uppercase">See All</a>
              </Link>

            </div>
            <div className="bg-white rounded-[20px] flex justify-star items-center py-4 px-9 mb-6 cursor-pointer transform hover:scale-105 duration-100 shadow-xl">
              <Image width={74} height={74} src="/assets/img/profile/bottle.png"></Image>
              <div className="ml-5">
                <p className="font-bold text-lg uppercase">Plastic Bottles</p>
                <p className="text-lg">Exchanged 1.5kg at ABC Junk Store</p>
                <p className="text-lg text-tertiary italic">Date</p>
              </div>
            </div>
            <div className="bg-white rounded-[20px] flex justify-star items-center py-4 px-9 mb-6 cursor-pointer transform hover:scale-105 duration-100 shadow-xl">
              <Image width={74} height={74} src="/assets/img/profile/bottle.png"></Image>
              <div className="ml-5">
                <p className="font-bold text-lg uppercase">Plastic Bottles</p>
                <p className="text-lg">Exchanged 1.5kg at ABC Junk Store</p>
                <p className="text-lg text-tertiary italic">Date</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap md:justify-center lg:justify-end">
          <div className="mr-5 mb-5 md:mb-0">
            <Link href="/profile/missions">
              <a>
                <SolidBlack className="uppercase">Do Missions &gt;</SolidBlack>
              </a>
            </Link>
          </div>
          <div className="mr-5 mb-5 md:mb-0">
            <Link href="/profile/leaderboards">
              <a>
                <SolidBlack className="uppercase">See Leaderboards &gt;</SolidBlack>
              </a>
            </Link>
          </div>
          <div>
            <Link href="/profile/rewards">
              <a>
                <SolidBlack className="uppercase">Go to Rewards &gt;</SolidBlack>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </LayoutUser>
  )
}

export default profile
