import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full">
      <div className="flex flex-col justify-around md:items-center md:flex-row bg-primary-dark px-5 py-16 gap-24">
        <div className="flex flex-col text-white font-dm text-lg">
          <a href="#home" className="-ml-3 mb-3">
            <Image
              src="/assets/img/resiklo-logo.png"
              alt="resiklo-logo"
              width="130"
              height="130"
            />
          </a>
          <p className="font-medium mb-3">Reduce, Reuse, Recycle</p>
          <p className="max-w-[300px] xl:max-w-[450px] mb-6">
            Resiklo PH is designed to help reduce pollutants caused by human
            activity by inviting people to collect and segregate their trash in
            exchange of leaf points.
          </p>
          <p className="max-w-[300px] xl:max-w-[450px]">
            Copyright Resiklo PH 2021
          </p>
        </div>
        <div className="flex flex-col text-white font-dm text-lg">
          <h2 className="font-bold text-2xl font-rubik mb-4">Stay connected</h2>
          <p className="max-w-[300px] xl:max-w-[450px]">
            We’re looking forward to hear from you! Visit our social media links
            below.
          </p>
          <div className="flex mt-4 gap-6">
            <a href="#" className="fb-icon">
              <Image
                src="/assets/img/footer/fb.png"
                alt="resiklo-fb"
                width="50"
                height="50"
              />
            </a>
            <a href="#" className="twitter-icon">
              <Image
                src="/assets/img/footer/twitter.png"
                alt="resiklo-twitter"
                width="50"
                height="50"
              />
            </a>
            <a href="#" className="ig-icon">
              <Image
                src="/assets/img/footer/ig.png"
                alt="resiklo-ig"
                width="50"
                height="50"
              />
            </a>
            <a href="#" className="mail-icon">
              <Image
                src="/assets/img/footer/mail.png"
                alt="resiklo-mail"
                width="50"
                height="50"
                className=""
              />
            </a>
          </div>
        </div>
      </div>
      {/* <div className="flex items-center justify-center h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Our Sponsors{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
