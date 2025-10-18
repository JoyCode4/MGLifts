import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { FaArrowRight } from "react-icons/fa";
import data from "../../data.json";

const Rentals = () => {
  const products = data.rentalProducts;
  const [viewAll, setViewAll] = useState(false);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Rentals
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Explore our range of premium aerial work platforms and equipment
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {viewAll
            ? products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))
            : products
                .slice(0, 3)
                .map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
        </div>
        <div className="flex justify-center mt-12 w-full">
          <div
            className="cursor-pointer px-9 py-3 rounded-full bg-[#D4AF37] flex justify-center items-center text-black hover:bg-[#393937] hover:text-primary transition-all duration-300 "
            onClick={() => setViewAll(!viewAll)}
          >
            <div>{viewAll ? "View Less Equipment" : "View All Equipment"}</div>
            <FaArrowRight
              className={`ml-2 transition-all duration-500 ${
                viewAll ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rentals;
