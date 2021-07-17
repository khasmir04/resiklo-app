import { useState } from "react";
import Link from "next/link";
import SolidBlack from "./Buttons/SolidBlack";
import Image from "next/image"

const HeaderUser = () => {
  const [navbar, setNavbar] = useState(true);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };
  return (
    <nav className="flex items-center justify-between flex-wrap bg-primary p-4 fixed w-full z-20 top-0 shadow">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link
          className="text-white no-underline hover:text-white hover:no-underline cursor-pointer"
          href="/"
        >
          <a className="text-2xl font-medium pl-2">
            <Image src="/assets/img/logo-header.png" alt="logo" width={174.83} height="60" ></Image>
          </a>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleNavbar()}
          id="nav-toggle"
          className="flex items-center px-3 py-2 text-primary-dark"
        >
          <svg
            className="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={
          `w-full flex-grow lg:flex lg:items-center lg:w-auto pt-6 lg:pt-0 ` +
          (navbar ? "hidden" : null)
        }
        id="nav-content"
      >
        <ul className="list-reset lg:flex justify-start flex-1 items-center">
          <li className="mr-3 ml-auto">
            <Link href="/">
              <a className="inline-block text-white no-underline hover:text-primary-dark text-xl py-2 px-4">
                Home
              </a>
            </Link>
          </li>
          <li className="mr-3 dropdown relative">
            <Link href="/market">
              <a className="inline-block text-white no-underline hover:text-primary-dark text-xl py-2 px-4">
                Market
              </a>
            </Link>
            <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
              <li className>
                <Link href="/store">
                  <a className="text-lg rounded text-white bg-primary border border-gray-300 hover:text-primary-dark py-1 px-4 block whitespace-no-wrap min-w-[120px]">Store</a>
                </Link>
              </li>
              <li className>
                <Link href="/map">
                  <a className="text-lg rounded text-white bg-primary border border-gray-300 hover:text-primary-dark py-1 px-4 block whitespace-no-wrap min-w-[120px]">Map</a>
                </Link>
              </li>
              <li className>
                <Link href="/estimator">
                  <a className="text-lg rounded text-white bg-primary border border-gray-300 hover:text-primary-dark py-1 px-4 block whitespace-no-wrap min-w-[120px]">Estimator</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="mr-3">
            <Link href="/faq">
              <a className="inline-block text-white no-underline hover:text-primary-dark text-xl py-2 px-4">
                FAQs
              </a>
            </Link>
          </li>
          <li className="mr-3">
            <Link href="/education">
              <a className="inline-block text-white no-underline hover:text-primary-dark text-xl py-2 px-4">
                Education
              </a>
            </Link>
          </li>
          <li className="mr-3">
            <Link href="/contact">
              <a className="inline-block text-white no-underline hover:text-primary-dark text-xl py-2 px-4">
                Contact Us
              </a>
            </Link>
          </li>
          <li className="mr-3 ml-auto flex">
            <Link href="/profile">
              <a className="inline-block text-white no-underline hover:text-primary-dark text-xl py-2 px-4">
                Profile
              </a>
            </Link>
          </li>
          <SolidBlack>Log out</SolidBlack>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderUser;
