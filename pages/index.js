import LayoutHome from '../components/Layout/LayoutHome';

import Image from 'next/image'

export default function Home() {

  return (
    <LayoutHome title="Home">
      <section id="home" className="bg-primary">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center h-screen">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="sm:text-4xl lg:text-7xl mb-11 font-bold text-white">
              Quote here
            </h1>
            <p className="mb-20 leading-relaxed text-white text-lg">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded-[20px] text-lg uppercase">Learn More &gt;</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
          </div>
        </div>
      </section>
    </LayoutHome>
  )
}
