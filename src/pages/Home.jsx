import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../../data.json";
import useScrollAnimation from "../hooks/useScrollAnimation";
import ContactUs from "./Contact";

const Home = () => {
  const navigate = useNavigate();
  const [bgIndex, setBgIndex] = useState(0);
  const team = data.team;
  const slideContent = data.slideContent;

  // Scroll animations for different sections
  const servicesHeaderAnim = useScrollAnimation("fadeIn", 0.1, 0);
  const rentalCardAnim = useScrollAnimation("slideUp", 0.1, 100);
  const salesCardAnim = useScrollAnimation("slideUp", 0.1, 200);
  const supportCardAnim = useScrollAnimation("slideUp", 0.1, 300);
  const teamHeaderAnim = useScrollAnimation("fadeIn", 0.1, 0);
  const teamMemberAnim = useScrollAnimation("zoomIn", 0.1, 100);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % slideContent.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slideContent.length]);

  return (
    <div className="">
      {/* Hero Section */}

      {/* Enhanced Dynamic Slider with Auto Slide and Navigation Dots */}
      <div className="relative w-full" id="gallery">
        <div className="relative h-screen overflow-hidden">
          {slideContent.map((img, idx) => (
            <div key={img + idx} className="absolute inset-0">
              {/* High-Quality Image with Overlay */}
              <img
                key={img + idx}
                src={slideContent[idx].image}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-[1500ms] ease-in-out ${
                  idx === bgIndex
                    ? "translate-x-0 z-20 scale-100"
                    : idx < bgIndex
                    ? "-translate-x-full z-10 scale-105"
                    : "translate-x-full z-10 scale-105"
                }`}
                style={{
                  imageRendering: "crisp-edges",
                  WebkitFontSmoothing: "antialiased",
                }}
                alt={`Slide ${idx + 1}`}
                loading="eager"
              />

              {/* Gradient Overlay for Better Text Visibility */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent transition-opacity duration-[1500ms] ${
                  idx === bgIndex ? "z-20 opacity-100" : "z-10 opacity-0"
                }`}
              />

              {/* Text Content with Enhanced Styling */}
              <div
                className={`absolute w-full h-full flex items-center px-8 md:px-16 lg:px-24 ${
                  idx === bgIndex ? "z-30" : "z-10"
                }`}
              >
                <div className="max-w-3xl space-y-6">
                  {/* H2 - Subheading with backdrop */}
                  <div className="overflow-hidden">
                    <h2
                      className={`
                        text-white md:text-2xl text-lg font-semibold transition-all duration-[1500ms] ease-in-out
                        ${
                          idx === bgIndex
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-20 opacity-0"
                        }
                      `}
                      style={{
                        willChange: "transform, opacity",
                        textShadow:
                          "2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      <span className="inline-block bg-[#D4AF37]/20 backdrop-blur-sm px-4 py-2 rounded-lg border-l-4 border-[#D4AF37]">
                        {slideContent[idx].h2}
                      </span>
                    </h2>
                  </div>

                  {/* H1 - Main Heading with strong contrast */}
                  <div className="overflow-hidden">
                    <h1
                      className={`
                        text-white md:text-6xl text-3xl font-bold leading-tight transition-all duration-[1500ms] ease-in-out
                        ${
                          idx === bgIndex
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-20 opacity-0"
                        }
                      `}
                      style={{
                        willChange: "transform, opacity",
                        textShadow:
                          "3px 3px 12px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.7)",
                      }}
                    >
                      {slideContent[idx].h1}
                    </h1>
                  </div>

                  {/* Description Text - Added for more context */}
                  <div className="overflow-hidden">
                    <p
                      className={`
                        text-gray-200 md:text-lg text-sm max-w-2xl leading-relaxed transition-all duration-[1500ms] ease-in-out
                        ${
                          idx === bgIndex
                            ? "translate-y-0 opacity-100 delay-100"
                            : "-translate-y-20 opacity-0"
                        }
                      `}
                      style={{
                        willChange: "transform, opacity",
                        textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)",
                      }}
                    >
                      {slideContent[idx].description}
                    </p>
                  </div>

                  {/* Button with Enhanced Styling */}
                  <div className="overflow-hidden pt-4">
                    <button
                      className={`
                         group relative md:text-lg text-base font-semibold transition-all duration-[1500ms] ease-in-out bg-gradient-to-r from-[#D4AF37] to-[#E6C14A] text-black rounded-full px-8 py-4 hover:shadow-2xl hover:shadow-[#D4AF37]/50 hover:scale-105
                         ${
                           idx === bgIndex
                             ? "translate-y-0 opacity-100 delay-200"
                             : "-translate-y-20 opacity-0"
                         }
                       `}
                      style={{
                        willChange: "transform, opacity",
                        zIndex: idx === bgIndex ? 30 : 10,
                        pointerEvents: idx === bgIndex ? "auto" : "none",
                      }}
                      onClick={() => navigate(slideContent[idx].link)}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {slideContent[idx].linkText}
                        <svg
                          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                      <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Enhanced Navigation Arrows */}
        <button
          type="button"
          onClick={() =>
            setBgIndex(
              (bgIndex - 1 + slideContent.length) % slideContent.length
            )
          }
          className="absolute top-1/2 -translate-y-1/2 md:left-6 left-1 z-40 group focus:outline-none"
          aria-label="Previous Slide"
        >
          <span className="inline-flex items-center justify-center w-6 h-6 md:w-14 md:h-14 rounded-full bg-black/50 backdrop-blur-md border-2 border-white/20 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300 shadow-xl group-hover:scale-110">
            <svg
              className="w-2 h-2 md:w-6 md:h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          onClick={() => setBgIndex((bgIndex + 1) % slideContent.length)}
          className="absolute top-1/2 -translate-y-1/2 md:right-6 right-1 z-40 group focus:outline-none"
          aria-label="Next Slide"
        >
          <span className="inline-flex items-center justify-center w-6 h-6 md:w-14 md:h-14 rounded-full bg-black/50 backdrop-blur-md border-2 border-white/20 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300 shadow-xl group-hover:scale-110">
            <svg
              className="w-2 h-2 md:w-6 md:h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
        {/* Enhanced Navigation Dots */}
        <div className="absolute flex space-x-3 justify-center w-full left-1/2 -translate-x-1/2 bottom-8 z-40">
          {slideContent.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setBgIndex(idx)}
              className={`transition-all duration-300 rounded-full ${
                bgIndex === idx
                  ? "w-12 h-3 bg-[#D4AF37] shadow-lg shadow-[#D4AF37]/50"
                  : "w-3 h-3 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <div className="mx-auto px-10 py-8 bg-white">
        <div className="container mx-auto">
          {/* Our Services */}
          <div className="mb-16">
            <div
              ref={servicesHeaderAnim.ref}
              className={`text-center mb-12 ${servicesHeaderAnim.className}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-3">
                Our Services
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E4B5] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 px-4">
              {/* Equipment Rental */}
              <div
                ref={rentalCardAnim.ref}
                onClick={() => navigate("/services#rental-header")}
                className={`group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 ${rentalCardAnim.className}`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-bl-full"></div>

                <div className="relative p-8">
                  {/* Icon Container */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md">
                      <img
                        src="/assets/lift.png"
                        alt="Equipment Rental"
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-[#D4AF37] transition-colors duration-300">
                    Equipment Rental
                  </h3>

                  {/* Divider */}
                  <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto mb-6"></div>

                  {/* Description List */}
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start group/item">
                      <span className="text-[#D4AF37] mr-3 mt-1 text-xl">
                        ✓
                      </span>
                      <span className="text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors">
                        <strong className="font-semibold">
                          Scissorlift Rental
                        </strong>{" "}
                        – For safe vertical access
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="text-[#D4AF37] mr-3 mt-1 text-xl">
                        ✓
                      </span>
                      <span className="text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors">
                        <strong className="font-semibold">
                          Boomlift Rental
                        </strong>{" "}
                        – For elevated areas
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="text-[#D4AF37] mr-3 mt-1 text-xl">
                        ✓
                      </span>
                      <span className="text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors">
                        <strong className="font-semibold">
                          Scaffolding Rental
                        </strong>{" "}
                        – For construction projects
                      </span>
                    </li>
                  </ul>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>

              {/* Equipment Sales */}
              <div
                ref={salesCardAnim.ref}
                onClick={() => navigate("/services#sales-header")}
                className={`group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 ${salesCardAnim.className}`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-bl-full"></div>

                <div className="relative p-8">
                  {/* Icon Container */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md">
                      <img
                        src="/assets/gear.png"
                        alt="Equipment Sales"
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-[#D4AF37] transition-colors duration-300">
                    Equipment Sales
                  </h3>

                  {/* Divider */}
                  <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto mb-6"></div>

                  {/* Description List */}
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start group/item">
                      <span className="text-[#D4AF37] mr-3 mt-1 text-xl">
                        ✓
                      </span>
                      <span className="text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors">
                        <strong className="font-semibold">
                          Brand-new equipment
                        </strong>
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="text-[#D4AF37] mr-3 mt-1 text-xl">
                        ✓
                      </span>
                      <span className="text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors">
                        <strong className="font-semibold">
                          Pre-owned options
                        </strong>
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="text-[#D4AF37] mr-3 mt-1 text-xl">
                        ✓
                      </span>
                      <span className="text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors">
                        <strong className="font-semibold">
                          Competitive pricing
                        </strong>
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="text-[#D4AF37] mr-3 mt-1 text-xl">
                        ✓
                      </span>
                      <span className="text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors">
                        <strong className="font-semibold">
                          After-sales service support
                        </strong>
                      </span>
                    </li>
                  </ul>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>

              {/* Maintenance & Support */}
              <div
                onClick={() => navigate("/services")}
                ref={supportCardAnim.ref}
                className={`group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 ${supportCardAnim.className}`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-bl-full"></div>

                <div className="relative p-8">
                  {/* Icon Container */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md">
                      <img
                        src="/assets/service.png"
                        alt="Maintenance & Support"
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-[#D4AF37] transition-colors duration-300">
                    Maintenance & Support
                  </h3>

                  {/* Divider */}
                  <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto mb-6"></div>

                  {/* Description List */}
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start group/item">
                      <span className="text-[#D4AF37] mr-3 mt-1 text-xl">
                        ✓
                      </span>
                      <span className="text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors">
                        <strong className="font-semibold">
                          Regular service and maintenance
                        </strong>
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="text-[#D4AF37] mr-3 mt-1 text-xl">
                        ✓
                      </span>
                      <span className="text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors">
                        <strong className="font-semibold">
                          Expert technical support
                        </strong>
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="text-[#D4AF37] mr-3 mt-1 text-xl">
                        ✓
                      </span>
                      <span className="text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors">
                        <strong className="font-semibold">
                          Skilled operators available
                        </strong>
                      </span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="text-[#D4AF37] mr-3 mt-1 text-xl">
                        ✓
                      </span>
                      <span className="text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors">
                        <strong className="font-semibold">
                          Keep projects running smoothly
                        </strong>
                      </span>
                    </li>
                  </ul>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Meet Our Team - Card Carousel Style */}
          <div className="mb-20">
            <div
              ref={teamHeaderAnim.ref}
              className={`${teamHeaderAnim.className}`}
            >
              <h2 className="text-3xl font-semibold mb-8 text-center">
                Our Founder & CEO
              </h2>
            </div>
            <div className="flex gap-4 justify-center items-center">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  ref={idx === 0 ? teamMemberAnim.ref : null}
                  className={`flex flex-col items-center bg-[#f7f7f7] border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition lg:w-1/3 lg:h-1/3 w-full h-full md:w-1/2 md:h-1/2 ${
                    idx === 0 ? teamMemberAnim.className : ""
                  }`}
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-primary"
                    onError={(e) => {
                      e.target.src = "/assets/default-avatar.png";
                    }}
                  />
                  <div className="font-semibold text-gray-800 text-lg mb-1">
                    {member.name}
                  </div>
                  <div className="text-primary text-sm">{member.role}</div>
                  <div className="text-gray-700 text-sm text-center">
                    {member.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default Home;
