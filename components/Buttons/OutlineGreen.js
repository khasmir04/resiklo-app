const OutlineGreen = (props) => {
  return (
    <a
      href={props.link}
      className="inline-flex text-primary bg-transparent border-2 border-primary py-2 px-6 focus:outline-none hover:bg-primary hover:text-white rounded-[20px] text-lg font-medium uppercase"
    >
      {props.children}
    </a>
  );
};

export default OutlineGreen;
