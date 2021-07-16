const SolidGreenDefault = (props) => {
  return (
    <div
      className="inline-flex text-primary-dark bg-secondary border border-secondary py-2 px-6 focus:outline-none hover:bg-transparent hover:border-primary-dark rounded-[20px] text-lg font-medium cursor-pointer uppercase"
    >
      {props.children}
    </div>
  );
};

export default SolidGreenDefault;
