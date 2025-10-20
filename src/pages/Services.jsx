import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { FaArrowRight } from "react-icons/fa";
import data from "../../data.json";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Services = () => {
  const salesProducts = data.salesProducts;
  const rentalsProducts = data.rentalProducts;
  const [viewAll, setViewAll] = useState(false);

  // Scroll animations
  const salesHeaderAnim = useScrollAnimation("fadeIn", 0.1, 0);
  const rentalsHeaderAnim = useScrollAnimation("fadeIn", 0.1, 0);

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-8 my-10">
        {/* Header Section */}
        <div
          ref={salesHeaderAnim.ref}
          className={`mb-16 text-center ${salesHeaderAnim.className}`}
        >
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#E6C14A] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              Premium Equipment
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Equipment <span className="text-[#D4AF37]">Sales</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#E6C14A] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore our range of premium aerial work platforms and equipment.
            Quality you can trust, delivered with excellence.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {viewAll
            ? salesProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))
            : salesProducts
                .slice(0, 3)
                .map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
        </div>

        {/* View All Button */}
        <div
          className={`${
            salesProducts.length <= 3 ? "hidden" : "flex"
          } justify-center w-full`}
        >
          <button
            className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E6C14A] flex justify-center items-center text-gray-900 font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            onClick={() => setViewAll(!viewAll)}
          >
            <span className="relative z-10">
              {viewAll ? "View Less Equipment" : "View All Equipment"}
            </span>
            <FaArrowRight
              className={`ml-3 relative z-10 transition-all duration-500 ${
                viewAll ? "rotate-180" : ""
              }`}
            />
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 my-10 mt-20">
        {/* Header Section */}
        <div
          ref={rentalsHeaderAnim.ref}
          className={`mb-16 text-center ${rentalsHeaderAnim.className}`}
        >
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#E6C14A] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              Flexible Rental Options
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Equipment <span className="text-[#D4AF37]">Rentals</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#E6C14A] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Rent our premium aerial work platforms and equipment at competitive
            rates. Flexible terms to suit your project needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {viewAll
            ? rentalsProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))
            : rentalsProducts
                .slice(0, 3)
                .map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
        </div>

        {/* View All Button */}
        <div
          className={`${
            rentalsProducts.length <= 3 ? "hidden" : "flex"
          } justify-center w-full`}
        >
          <button
            className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E6C14A] flex justify-center items-center text-gray-900 font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            onClick={() => setViewAll(!viewAll)}
          >
            <span className="relative z-10">
              {viewAll ? "View Less Equipment" : "View All Equipment"}
            </span>
            <FaArrowRight
              className={`ml-3 relative z-10 transition-all duration-500 ${
                viewAll ? "rotate-180" : ""
              }`}
            />
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
