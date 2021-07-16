import React from "react";
import Image from "next/image";
import Link from "next/link";
import LayoutUser from "../../components/Layout/LayoutUser";
import SolidBlack from "../../components/Buttons/SolidBlack";

const missions = () => {
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
