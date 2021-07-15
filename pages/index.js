import LayoutHome from '../components/Layout/LayoutHome';

import Image from 'next/image'

export default function Home() {

  return (
    <LayoutHome title="Home">
      <section id="home" className="bg-primary">
        <div className="container m-auto flex px-5 py-5 lg:py-24 md:flex-row flex-col-reverse items-center h-screen">
          <div className="w-full lg:w-1/2 lg:px-24 md:px-16 ">
            <div className="flex flex-col md:items-start md:text-left items-center text-center mx-auto">
              <h1 className="text-5xl lg:text-7xl mb-11 font-bold text-white">
                Quote here
              </h1>
              <p className="mb-20 leading-relaxed text-white text-lg">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded-[20px] text-lg uppercase">Learn More &gt;</button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-20 lg:p-0 mt-20 lg:mt-0 flex justify-center items-center">
            <Image className="object-cover object-center rounded" width={500} height={500} alt="hero" src="/assets/img/500x500.png" />
          </div>
        </div>
      </section>
    </LayoutHome>
  )
}
