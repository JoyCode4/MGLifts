import React from "react";

const BasicCard = ({ title, icon }) => {
  return (
    <div className="h-72 flex flex-col justify-center items-center bg-white border-none card overflow-hidden shadow-lg transition-all duration-300">
      {icon}
      <h3 className="card-title text-xl my-3 text-black">{title}</h3>
    </div>
  );
};

export default BasicCard;
