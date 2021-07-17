const TertiaryGreen = (props) => {
  return (
    <div className="inline-flex text-white bg-tertiary border border-tertiary py-3 px-11 focus:outline-none hover:bg-transparent hover:text-tertiary rounded-[20px] text-lg font-medium cursor-pointer uppercase">
      {props.children}
    </div>
  );
};

export default TertiaryGreen;
