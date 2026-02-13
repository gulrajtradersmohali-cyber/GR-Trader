import React from "react";

const Button = ({ btnname, btn_secondary }) => {
  return (
    <button
      className={`text-xl xl:text-2xl  ${btn_secondary
        ? "bg-white text-primary border-primary"
        : "bg-primary text-white border-white"} border-2 px-5 xl:px-7 py-2 xl:py-3 rounded-full cursor-pointer relative outline-none group`}
    >
      {btnname}
      <span
        className={`absolute border-t-[3px] ${btn_secondary
          ? "border-primary"
          : "border-[#ffffffa3]"}  left-1/2 -translate-x-1/2 w-[50%] xl:w-[70%] group-hover:w-2.5 bottom-1.5 md:bottom-2.5 transition-all duration-300`}
      />
    </button>
  );
};

export default Button;
