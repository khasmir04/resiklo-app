import React from "react";
import Image from "next/image";
import Link from "next/link";
import LayoutUser from "../../components/Layout/LayoutUser";
import SolidBlack from "../../components/Buttons/SolidBlack";

const leaderboards = () => {
  return (
    <div>
      <div className="flex flex-wrap md:justify-center lg:justify-end">
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
      </div>
    </div>
  )
}

export default leaderboards
