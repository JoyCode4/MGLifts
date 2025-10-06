import React from "react";
import { TbAerialLift } from "react-icons/tb";

const UnitCardDetails = ({ title, description, image, price }) => {
  return (
    <div className="card overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-72 object-cover" />
        <div className="absolute top-4 right-4 bg-primary-gold text-primary-bg px-3 py-1 rounded-full text-sm font-semibold">
          {price}
        </div>
      </div>

      <div className="p-6 bg-white flex justify-between gap-6">
        <div className="flex flex-col">
          <h3 className="text-black card-title text-xl mb-3">{title}</h3>

          <p className="text-black mb-4 leading-relaxed">{description}</p>
        </div>

        <div className="flex justify-between items-center">
          <TbAerialLift className="text-primary text-5xl" />
        </div>
      </div>
    </div>
  );
};

export default UnitCardDetails;
