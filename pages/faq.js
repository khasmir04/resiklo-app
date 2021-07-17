import LayoutHome from "../components/Layout/LayoutHome";
import Image from "next/image";

const faq = () => {
  return (
    <LayoutHome title="FAQs">
      <section id="faq" className="container px-5 py-5 lg:py-24 mx-auto mt-20">
        <div className="text-center mb-14">
          <h2 className="font-bold text-primary-dark text-6xl mb-7">Our Initiative</h2>
          <p className="font-bold text-black text-lg mb-6">
            We are the creators of Resiklo.
          </p>
          <p className="font-bold text-black text-lg mb-16">
            We are here to inspire and challenge Filipinos to achieve the highest waste reduction, recycling, and reuse goals in the nation through innovation and creativity.
          </p>
          <div className="flex flex-row-reverse flex-wrap justify-center items-center mb-28">
            <div className="w-full lg:w-1/2">
              <Image src="/assets/img/faq/initiative.png" width={865} height={627.62} alt="initiative">
              </Image>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="lg:p-10">
                <h2 className="font-bold text-5xl mb-7 text-primary-dark text-left">Our mission</h2>
                <p className="text-lg text-left">
                  The purpose of our organization is to promote waste management, and the 3R concept of minimizing, reusing, and recycling. We aim to establish a world where all materials are managed properly so that they can be used for future generations.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

          </div>
          <h2 className="font-bold text-7xl text-center py-20 bg-tertiary mb-20">Frequently Asked Questions</h2>
          <Image src="/assets/img/faq/accordion.png"
            width={1060}
            height={582}
            alt="faq-accordion"
          >
          </Image>
        </div>
      </section>
    </LayoutHome>
  )
}

export default faq
