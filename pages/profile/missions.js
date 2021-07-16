import React from "react";
import Image from "next/image";
import Link from "next/link";
import LayoutUser from "../../components/Layout/LayoutUser";
import SolidBlack from "../../components/Buttons/SolidBlack";

const missions = () => {
  return (
    <LayoutUser title="Missions">
      <section className="container px-5 py-5 lg:py-24 mx-auto mt-20">
        <h2 className="font-bold text-6xl text-primary-dark mb-6">Missions</h2>
        <p className="font-bold text-black text-lg mb-[90px]">
          You’re 500 experience points away from leveling up.
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </p>
        <div className="flex justify-center items-center mb-20">
          <Image src="/assets/img/profile/progressbar.png" width={1063} height={104}></Image>
        </div>
        <hr className="text-primary-dark border-2 border-primary-dark mb-14" />
        <div className="mb-20">
          <p className="font-rubik text-tertiary font-medium text-2xl mb-6">Daily Missions</p>
          <div className="flex flex-wrap">
            <div className="flex-grow md:w-1/2 p-5">
              <div className="flex items-center bg-white rounded-[20px] shadow-xl p-8 transition duration-100 hover:scale-105 cursor-pointer">
                <Image src="/assets/img/profile/mission-incomplete.png" width={70} height={70}></Image>
                <div className="ml-6">
                  <p className="font-bold text-lg">Collect 10 Plastic bottles</p>
                  <p className="text-lg">Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </div>
            <div className="flex-grow md:w-1/2 p-5">
              <div className="flex items-center bg-secondary rounded-[20px] shadow-xl p-8 transition duration-100 hover:scale-105 cursor-pointer">
                <Image src="/assets/img/profile/mission-complete.png" width={70} height={70}></Image>
                <div className="ml-6">
                  <p className="font-bold text-lg">Good Job! 10 Plastic bottles collected</p>
                  <p className="text-lg">Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </div>
            <div className="flex-grow md:w-1/2 p-5">
              <div className="flex items-center bg-secondary rounded-[20px] shadow-xl p-8 transition duration-100 hover:scale-105 cursor-pointer">
                <Image src="/assets/img/profile/mission-complete.png" width={70} height={70}></Image>
                <div className="ml-6">
                  <p className="font-bold text-lg">Good Job! 10 Plastic bottles collected</p>
                  <p className="text-lg">Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </div>
            <div className="flex-grow md:w-1/2 p-5">
              <div className="flex items-center bg-white rounded-[20px] shadow-xl p-8 transition duration-100 hover:scale-105 cursor-pointer">
                <Image src="/assets/img/profile/mission-incomplete.png" width={70} height={70}></Image>
                <div className="ml-6">
                  <p className="font-bold text-lg">Collect 10 Plastic bottles</p>
                  <p className="text-lg">Lorem ipsum dolor sit.</p>
                </div>
              </div>
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

export default missions
