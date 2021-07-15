import { useState } from "react";
import Link from "next/link";
import SolidGreen from "./Buttons/SolidGreen";

const Header = () => {
  const [navbar, setNavbar] = useState(true);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };
  return (
    <nav className="flex items-center justify-between flex-wrap bg-primary p-4 fixed w-full z-20 top-0 shadow">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a
          className="text-white no-underline hover:text-white hover:no-underline"
          href="#"
        >
          <span className="text-2xl font-medium pl-2">
            <i className="em em-grinning" /> Resiklo
          </span>
        </a>
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
            <Link href="/#">
              <a className="inline-block text-white no-underline hover:text-primary-dark text-xl py-2 px-4">
                Home
              </a>
            </Link>
          </li>
          <li className="mr-3">
            <Link href="/#">
              <a className="inline-block text-white no-underline hover:text-primary-dark text-xl py-2 px-4">
                Market
              </a>
            </Link>
          </li>
          <li className="mr-3">
            <Link href="/#">
              <a className="inline-block text-white no-underline hover:text-primary-dark text-xl py-2 px-4">
                FAQs
              </a>
            </Link>
          </li>
          <li className="mr-3">
            <Link href="/#">
              <a className="inline-block text-white no-underline hover:text-primary-dark text-xl py-2 px-4">
                Education
              </a>
            </Link>
          </li>
          <li className="mr-3">
            <Link href="/#">
              <a className="inline-block text-white no-underline hover:text-primary-dark text-xl py-2 px-4">
                Contact Us
              </a>
            </Link>
          </li>
          <li className="mr-3 ml-auto flex">
            <Link href="/#">
              <a className="inline-block text-white no-underline hover:text-primary-dark text-xl py-2 px-4">
                Log In
              </a>
            </Link>
          </li>
          <SolidGreen>get started</SolidGreen>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
