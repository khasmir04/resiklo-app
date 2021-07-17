import React from "react";

const FormInput = (props) => {
  return (
    <div className="flex flex-col mb-5 w-full lg:w-3/12 mr-14">
      <label
        className="font-dmsans text-black text-lg font-bold mb-2"
        htmlFor={props.label}
      >
        {props.label}
      </label>
      <input
        id={props.label}
        className="border-2 border-primary rounded-2xl focus:outline-none w-full py-2 px-3"
        type={props.type}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};

export default FormInput;
