import React, { useEffect, useState } from "react";
import GridComponent from "../components/GridComponent";
import BasicCard from "../components/BasicCard";
import { useNavigate } from "react-router-dom";
import data from "../../data.json";

const Home = () => {
  const navigate = useNavigate();
  const [bgIndex, setBgIndex] = useState(0);
  const sampleCards = data.sampleCards;
  const testimonials = data.testimonials;
  const team = data.team;
  const slideContent = data.slideContent;

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % slideContent.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      {/* Hero Section */}

      {/* Simple Dynamic Slider with Auto Slide and Navigation Dots */}
      <div className="relative w-full" id="gallery">
        <div className="relative h-screen overflow-hidden rounded-lg md:h-screen">
          {slideContent.map((img, idx) => (
            <div key={img + idx}>
              <img
                key={img + idx}
                src={slideContent[idx].image}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-in-out ${
                  idx === bgIndex
                    ? "translate-x-0 z-20"
                    : idx < bgIndex
                    ? "-translate-x-full z-10"
                    : "translate-x-full z-10"
                }`}
                alt={`Slide ${idx + 1}`}
              />
              <div
                className={`absolute w-full h-full flex items-center justify-center ${
                  idx === bgIndex ? "z-20" : "z-10"
                }`}
              >
                <div className="w-1/2 h-full flex justify-center flex-col gap-4">
                  {/* H2 - Subheading */}
                  <div className="h-16">
                    <div className={`h-16 flex items-end overflow-hidden`}>
                      <h2
                        className={`
                        ${
                          slideContent[idx].textColor
                        } text-2xl font-medium transition-transform duration-[1500ms] ease-in-out
                        ${
                          idx === bgIndex
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-20 opacity-0"
                        }
                      `}
                        style={{ willChange: "transform, opacity" }}
                      >
                        {slideContent[idx].h2}
                      </h2>
                    </div>
                  </div>

                  {/* H1 - Main Heading */}
                  <div className="h-24">
                    <div className={`h-24 flex items-center overflow-hidden`}>
                      <h1
                        className={`
                        ${
                          slideContent[idx].textColor
                        } text-5xl font-bold transition-transform duration-[1500ms] ease-in-out
                        ${
                          idx === bgIndex
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-20 opacity-0"
                        }
                      `}
                        style={{ willChange: "transform, opacity" }}
                      >
                        {slideContent[idx].h1}
                      </h1>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="relative h-20 flex items-start overflow-hidden">
                    <button
                      className={`
                         ${
                           slideContent[idx].textColor
                         } text-2xl font-medium transition-transform duration-[1500ms] ease-in-out border-2 border-[#D4AF37] rounded-md px-4 py-2 hover:bg-[#D4AF37] hover:text-black hover:cursor-pointer
                         ${
                           idx === bgIndex
                             ? "translate-y-0 opacity-100"
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
                      {slideContent[idx].linkText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={() =>
            setBgIndex(
              (bgIndex - 1 + slideContent.length) % slideContent.length
            )
          }
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          aria-label="Previous Slide"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white"
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
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          aria-label="Next Slide"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white"
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
        {/* Navigation Dots */}
        <div className="absolute flex space-x-3 justify-center w-full left-1/2 -translate-x-1/2 bottom-4 z-40">
          {slideContent.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setBgIndex(idx)}
              className={`w-3 h-3 border border-white ${
                bgIndex === idx ? "bg-white" : "bg-gray-400 opacity-50"
              } transition-all`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <div className="mx-auto px-10 py-8 bg-white">
        <div className="container mx-auto">
          {/* Our Capabilities */}
          <div className="mb-12">
            <h2 className="text-3xl text-center font-semibold mb-8">
              Our Services
            </h2>
            <GridComponent>
              {sampleCards.map((card) => (
                <BasicCard
                  className="group"
                  key={card.id}
                  {...card}
                  icon={card.icon}
                />
              ))}
            </GridComponent>
          </div>

          {/* What Our Clients Say - Horizontal Scroll Cards */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-[#f7f7f7] border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-primary"
                      onError={(e) => {
                        e.target.src = "/assets/default-avatar.png";
                      }}
                    />
                    <div>
                      <div className="font-semibold text-gray-800">
                        {t.name}
                      </div>
                      <div className="text-sm text-gray-500">{t.company}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{t.feedback}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Meet Our Team - Card Carousel Style */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8 justify-center">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center bg-[#f7f7f7] border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition"
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
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-primary-secondary border border-border-primary rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-text-secondary mb-6">
              Contact us today for a free consultation and quote for your lift
              needs.
            </p>
            <button
              className="btn-primary"
              onClick={() => navigate("/contact")}
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
