const TertiaryGreenOutline = (props) => {
  return (
    <div className="inline-flex hover:text-white hover:bg-tertiary border bg-transparent border-tertiary py-3 px-11 focus:outline-none text-tertiary rounded-[20px] text-lg font-medium cursor-pointer uppercase">
      {props.children}
    </div>
  );
};

export default TertiaryGreenOutline;
