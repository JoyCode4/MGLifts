import React from "react";

const BasicCard = ({ title, icon }) => {
  return (
    <div className="h-72 flex flex-col justify-center items-center bg-white border-none card overflow-hidden shadow-lg transition-all duration-300">
      <img src={icon} alt={title} className="w-[100px] h-[100px]" />
      <h3 className="card-title text-2xl my-3 text-black">{title}</h3>
    </div>
  );
};

export default BasicCard;
