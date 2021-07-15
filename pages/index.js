import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [navbar, setNavbar] = useState(true);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Resiklo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center pt-20">

        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
              <span className="text-2xl pl-2"><i className="em em-grinning" /> Resiklo</span>
            </a>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => toggleNavbar()}
              id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
          </div>
          <div

            className={`w-full flex-grow lg:flex lg:items-center lg:w-auto pt-6 lg:pt-0 ` + (navbar ? 'hidden' : null)}
            id="nav-content">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <a className="inline-block py-2 px-4 text-white no-underline" href="#">Active</a>
              </li>
              <li className="mr-3">
                <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
              </li>
              <li className="mr-3">
                <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
              </li>
              <li className="mr-3">
                <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
              </li>
            </ul>
          </div>
        </nav>


        <h1 className="text-6xl font-bold">
          <a className="text-blue-600" href="https://nextjs.org">
            Resiklo
          </a>
        </h1>

        <div className="flex flex-col flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-4xl text-center font-bold">Manage</h3>
            <p className="mt-4 text-xl">
              Manage your wastes.
            </p>
          </a>

          <a
            href="https://nextjs.org/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-4xl text-center font-bold">Buy</h3>
            <p className="mt-4 text-xl">
              Buy waste from other users.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-4xl text-center font-bold">Sell</h3>
            <p className="mt-4 text-xl">
              Earn money by selling wastes.
            </p>
          </a>

        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Our Sponsors{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
