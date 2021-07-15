import React from "react";

const FormInput = (props) => {
  return (
    <div className="flex flex-col gap-2 mb-12">
      <label
        className="font-dmsans font-bold text-black text-lg font-medium"
        for={props.label}
      >
        {props.label}
      </label>
      <input
        id={props.label}
        className={`border-2 border-primary rounded-2xl focus:outline-none w-full ${props.px} ${props.py} ${props.height}`}
        type={props.type}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};

export default FormInput;
