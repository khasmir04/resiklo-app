import React from "react";
import Image from "next/image";
import Link from "next/link";
import LayoutUser from "../../components/Layout/LayoutUser";
import SolidBlack from "../../components/Buttons/SolidBlack";

const leaderboards = () => {
  return (
    <LayoutUser title="Leaderboards">
      <section className="container px-5 py-5 lg:py-24 mx-auto mt-20">
        <div className="text-center mb-14">
          <h2 className="font-bold text-primary-dark text-6xl mb-7">Leaderboards</h2>
          <p className="font-bold text-black text-lg">Description of leaderboard. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
        </div>
        <div className="flex justify-center items-center mb-16">
          <Image className="transition hover:scale-105 duration-100 cursor-pointer" width={404} height={561} src="/assets/img/profile/friends.png" alt="friends"></Image>
          <Image className="transition hover:scale-105 duration-100 cursor-pointer" width={404} height={561} src="/assets/img/profile/national.png" alt="national"></Image>
        </div>
        <div className="flex flex-wrap justify-center">
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

export default leaderboards
