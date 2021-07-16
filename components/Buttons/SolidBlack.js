const SolidBlack = (props) => {
  return (
    <a
      href={props.link}
      className="inline-flex text-white bg-primary-dark border border-primary-dark py-2 px-6 focus:outline-none hover:bg-transparent hover:text-primary-dark rounded-[20px] text-lg font-medium cursor-pointer uppercase"
    >
      {props.children}
    </a>
  );
};

export default SolidBlack;
