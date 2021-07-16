const SolidGreen = (props) => {
  return (
    <a
      href={props.link}
      className="inline-flex text-white bg-secondary-light border border-secondary-light py-2 px-6 focus:outline-none hover:bg-transparent hover:text-white hover:border-white rounded-[20px] text-lg font-medium cursor-pointer uppercase"
    >
      {props.children}
    </a>
  );
};

export default SolidGreen;
