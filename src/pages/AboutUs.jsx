import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const AboutUs = () => {
  // Scroll animations
  const companyInfoAnim = useScrollAnimation("fadeIn", 0.1, 0);
  const visionAnim = useScrollAnimation("slideLeft", 0.1, 100);
  const missionAnim = useScrollAnimation("slideRight", 0.1, 200);
  const servicesAnim = useScrollAnimation("slideUp", 0.1, 0);

  return (
    <div className="mx-auto bg-white md:pb-10 pb-0 pt-10">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#E6C14A] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                About Us
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#E6C14A] bg-clip-text text-transparent mb-6">
              Our Story & Values
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#E6C14A] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700">
              Trusted since 2018, M G Engineering Solutions delivers safe,
              reliable lift and access equipment rentals, sales, and services
              across India. Discover our journey, mission, and commitment to
              safety and customer satisfaction.
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto pt-20">
        <div
          ref={companyInfoAnim.ref}
          className={`mx-10 md:mx-0 mb-12 text-black ${companyInfoAnim.className}`}
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Welcome to M G Engineering Solutions
            </h2>
            <p className="text-black mb-4 leading-relaxed">
              Manish Gupta is the Founder and CEO of M G Engineering Solutions,
              a leading name in equipment rental and material handling services.
              With over a decade of hands-on experience in the construction and
              industrial sector, he brings strong technical expertise and a
              passion for innovation.
              <br />
              <br />
              Under his leadership, the company has built a reputation for
              safety, reliability, and customer-focused service — delivering
              solutions that raise industry standards across India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div
              ref={missionAnim.ref}
              className={`bg-gray-50 p-6 rounded-lg ${missionAnim.className}`}
            >
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-black leading-relaxed">
                To provide advanced material handling and access equipment with
                reliable, efficient, and safe rental solutions — empowering
                industries to work smarter, faster, and safer every day.
              </p>
            </div>

            <div
              ref={visionAnim.ref}
              className={`bg-gray-50 p-6 rounded-lg ${visionAnim.className}`}
            >
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-black leading-relaxed">
                To be India's most trusted and innovative partner in equipment
                rental and material handling solutions — setting new standards
                in quality, safety, and customer satisfaction across every
                project.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Our Promise
            </h2>
            <p className="text-black text-center text-lg font-medium">
              "We deliver safe, reliable, and cost-effective lifting and access
              solutions — ensuring timely service, top performance, and complete
              peace of mind for our customers."
            </p>
          </div>
        </div>

        <div className="mx-10 md:mx-0 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🦺</span>
              </div>
              <h3 className="text-gray-800 font-bold text-center mb-3">
                Safety First
              </h3>
              <p className="text-gray-700 text-sm text-center">
                We prioritize safety in every solution and service
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚙️</span>
              </div>
              <h3 className="text-gray-800 font-bold text-center mb-3">
                Reliability
              </h3>
              <p className="text-gray-700 text-sm text-center">
                We deliver equipment and support you can count on, every time
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-gray-800 font-bold text-center mb-3">
                Customer-Centric
              </h3>
              <p className="text-gray-700 text-sm text-center">
                We listen, understand, and provide solutions tailored to client
                needs
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-gray-800 font-bold text-center mb-3">
                Innovation & Efficiency
              </h3>
              <p className="text-gray-700 text-sm text-center">
                We adopt modern technology and methods to improve performance
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-gray-800 font-bold text-center mb-3">
                Integrity & Trust
              </h3>
              <p className="text-gray-700 text-sm text-center">
                We believe in honesty, transparency, and long-term relationships
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-gray-800 font-bold text-center mb-3">
                Sustainability
              </h3>
              <p className="text-gray-700 text-sm text-center">
                We promote practices that are safe for people and better for the
                environment
              </p>
            </div>
          </div>
        </div>

        <div className="border border-gray-600 rounded-xl p-8 mb-8 mx-10 md:mx-0 bg-gray-50">
          <h2 className="text-black text-2xl font-semibold mb-6 text-center">
            Why Choose M G Engineering Solutions?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-gray-800 font-semibold mb-2">
                6+ Years Experience
              </h3>
              <p className="text-gray-700 text-sm">
                Trusted service since 2018
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-gray-800 font-semibold mb-2">
                Trained & Certified Staff
              </h3>
              <p className="text-gray-700 text-sm">
                Professional operators and technicians
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-gray-800 font-semibold mb-2">
                Wide Range of Equipment
              </h3>
              <p className="text-gray-700 text-sm">
                Scissorlift, Boomlift & Scaffolding
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-gray-800 font-semibold mb-2">
                Timely Delivery
              </h3>
              <p className="text-gray-700 text-sm">
                On-time equipment delivery guaranteed
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-gray-800 font-semibold mb-2">
                Flexible Options
              </h3>
              <p className="text-gray-700 text-sm">
                Flexible rental and purchase options
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-gray-800 font-semibold mb-2">
                Complete Support
              </h3>
              <p className="text-gray-700 text-sm">
                Maintenance & technical support included
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
