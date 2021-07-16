const SolidBlack = (props) => {
  return (
    <a
      href={props.link}
      className="inline-flex text-white bg-black border border-black py-2 px-6 focus:outline-none hover:bg-transparent hover:text-black rounded-[20px] text-lg font-medium cursor-pointer uppercase"
    >
      {props.children}
    </a>
  );
};

export default SolidBlack;
