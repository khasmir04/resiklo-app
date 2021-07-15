const Footer = () => {
  return (
    <footer className="flex flex-col w-full">
      <div className="flex flex-col justify-around md:items-center md:flex-row bg-primary-dark px-5 py-24 gap-24">
        <div className="flex flex-col text-white font-dm text-lg">
          <a href="#home">
            <img src="" alt="resiklo" />
          </a>
          <p className="font-medium">Lorem ipsum dolor</p>
          <p className="max-w-[300px] xl:max-w-[450px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-col text-white font-dm text-lg">
          <h2 className="font-medium">Stay connected</h2>
          <p className="max-w-[300px] xl:max-w-[450px]">
            We’re looking forward to hear from you! Visit our social media links
            below.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Our Sponsors{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
