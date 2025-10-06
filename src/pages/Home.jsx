import React from "react";
import CardDetails from "../components/CardDetails";
import GridComponent from "../components/GridComponent";
import BasicCard from "../components/BasicCard";
import { FaGear } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdForklift } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const sampleCards = [
    {
      id: 1,
      title: "Premium Lift Solutions",
      description:
        "High-quality elevator systems designed for modern buildings",
      icon: (
        <MdForklift className="text-black text-[6rem] mb-3 hover:text-primary transition-all duration-500 ease-in-out" />
      ),
      price: "Starting from $50,000",
    },
    {
      id: 2,
      title: "Maintenance Services",
      description:
        "Professional maintenance and repair services for all lift types",
      icon: (
        <FaGear className="text-black text-[6rem] mb-3 hover:text-primary transition-all duration-500 ease-in-out" />
      ),
      price: "Monthly plans available",
    },
    {
      id: 3,
      title: "Emergency Support",
      description: "24/7 emergency support and rapid response team",
      icon: (
        <IoIosCall className="text-black text-[6rem] mb-3 hover:text-primary transition-all duration-500 ease-in-out" />
      ),
      price: "24/7 availability",
    },
  ];

  // Example testimonials for "What Our Clients Say"
  const testimonials = [
    {
      name: "John A.",
      company: "CEO of Innovate Corp.",
      feedback:
        "From consultation to installation, the process was smooth and transparent. Great experience overall.",
      avatar: "/assets/client3.png",
    },
    {
      name: "Dr. Anya Sharma",
      company: "Chief Engineer, Global Dynamics",
      feedback:
        "The lifts provided by MG Lifts are reliable, efficient, and maintainable. I highly recommend them!",
      avatar: "/assets/Client1.png",
    },
    {
      name: "Dr. Sofia Morales",
      company: "Chief Engineer, Urban Towers",
      feedback:
        "Their maintenance team is always prompt and professional. We feel safe knowing MG Lifts is with us.",
      avatar: "/assets/client2.png",
    },
  ];

  // Example team members for "Meet Our Team"
  const team = [
    {
      name: "Vikram Patel",
      role: "Project Manager",
      photo: "/assets/member1.png",
    },
    {
      name: "Marcus Williams",
      role: "Senior Engineer",
      photo: "/assets/member2.png",
    },
    {
      name: "Naomi Tanaka",
      role: "Marketing Specialist",
      photo: "/assets/member3.png",
    },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative w-full h-screen shadow-lg">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <div className="relative w-full h-full">
            <img
              src="/assets/bg_home.png"
              alt="logo"
              className="w-full h-full xl:object-fill object-cover"
            />
            {/* Gradient overlay from bottom */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.0) 100%)",
              }}
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <div className="px-4 md:px-0 md:w-1/2 w-full flex flex-col  md:items-start gap-2 uppercase">
            <h1 className="text-3xl md:text-5xl mb-4 text-white">
              Your Access To
            </h1>
            <h1 className="text-3xl md:text-5xl mb-4 text-white">
              New Heights
            </h1>
            <div className="flex justify-between md:flex-row flex-col gap-4">
              <button
                onClick={() => navigate("/rentals")}
                className=" md:w-full w-1/2 my-4 sm:px-12 py-3 btn-primary rounded-full"
              >
                Rentals
              </button>
              <button
                onClick={() => navigate("/sales")}
                className=" md:w-full w-1/2 my-4 sm:px-12 py-3 btn-primary rounded-full"
              >
                Sales
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto px-10 py-8 bg-white">
        <div className="container mx-auto">
          {/* Our Capabilities */}
          <div className="mb-12">
            <h2 className="text-3xl text-center font-semibold mb-8">
              Our Capabilities
            </h2>
            <GridComponent>
              {sampleCards.map((card) => (
                <BasicCard className="group" key={card.id} {...card} />
              ))}
            </GridComponent>
          </div>

          {/* Process Timeline Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              How We Work
            </h2>
            <div className="relative max-w-4xl mx-auto">
              <div className="border-l-4 border-primary absolute h-[90%] left-[3rem] top-2 z-0"></div>
              <div className="space-y-12 pl-20">
                <div className="relative z-10">
                  <div className="absolute -left-12 top-0 bg-white text-black w-10 h-10 flex items-center justify-center rounded-full font-bold shadow-lg z-10">
                    1
                  </div>
                  <h4 className="text-xl font-semibold mb-1">Consultation</h4>
                  <p className="text-gray-600">
                    We assess your needs and provide expert recommendations
                    tailored to your project.
                  </p>
                </div>
                <div className="relative z-10">
                  <div className="absolute -left-12 top-0 bg-white text-black w-10 h-10 flex items-center justify-center rounded-full font-bold shadow-lg z-10">
                    2
                  </div>
                  <h4 className="text-xl font-semibold mb-1">
                    Design & Planning
                  </h4>
                  <p className="text-gray-600">
                    Our team designs a solution that fits your building and
                    budget, ensuring safety and compliance.
                  </p>
                </div>
                <div className="relative z-10">
                  <div className="absolute -left-12 top-0 bg-white text-black w-10 h-10 flex items-center justify-center rounded-full font-bold shadow-lg z-10">
                    3
                  </div>
                  <h4 className="text-xl font-semibold mb-1">Installation</h4>
                  <p className="text-gray-600">
                    Certified technicians install your lift system with minimal
                    disruption and maximum efficiency.
                  </p>
                </div>
                <div className="relative z-10">
                  <div className="absolute -left-12 top-0 bg-white text-black w-10 h-10 flex items-center justify-center rounded-full font-bold shadow-lg z-10">
                    4
                  </div>
                  <h4 className="text-xl font-semibold mb-1">
                    Ongoing Support
                  </h4>
                  <p className="text-gray-600">
                    We provide regular maintenance and 24/7 support to keep your
                    lifts running smoothly.
                  </p>
                </div>
              </div>
            </div>
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

          {/* FAQ Section */}
          <div className="mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="divide-y divide-gray-200 rounded-xl bg-[#f7f7f7] border border-gray-200 shadow">
              <details className="p-6 group" open>
                <summary className="text-black font-semibold cursor-pointer text-lg flex items-center justify-between">
                  What types of lifts do you offer?
                  <span className="ml-2 text-primary group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <p className="mt-2 text-gray-700">
                  We offer a wide range of lifts including passenger elevators,
                  freight elevators, home lifts, and custom solutions for both
                  residential and commercial needs.
                </p>
              </details>
              <details className="p-6 group">
                <summary className="text-black font-semibold cursor-pointer text-lg flex items-center justify-between">
                  Do you provide maintenance contracts?
                  <span className="ml-2 text-primary group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <p className="mt-2 text-gray-700">
                  Yes, we offer flexible maintenance contracts to ensure your
                  lifts remain safe, reliable, and compliant with all
                  regulations.
                </p>
              </details>
              <details className="p-6 group">
                <summary className="text-black font-semibold cursor-pointer text-lg flex items-center justify-between">
                  How quickly can you respond to emergencies?
                  <span className="ml-2 text-primary group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <p className="mt-2 text-gray-700">
                  Our emergency support team is available 24/7 and can respond
                  rapidly to any lift-related issues.
                </p>
              </details>
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
