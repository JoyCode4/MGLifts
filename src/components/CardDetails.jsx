import React from "react";

const CardDetails = ({ title, description, image, price }) => {
  return (
    <div className="card overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-4 right-4 bg-primary-gold text-primary-bg px-3 py-1 rounded-full text-sm font-semibold">
          {price}
        </div>
      </div>

      <div className="p-6">
        <h3 className="card-title text-xl mb-3">{title}</h3>

        <p className="text-text-secondary mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex justify-between items-center">
          <button className="btn-primary">Learn More</button>

          <button className="text-primary-gold font-semibold hover:text-primary-gold-hover transition-colors">
            Get Quote →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
