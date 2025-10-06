import React from "react";

const AboutUs = () => {
  return (
    <div className="mx-auto py-8">
      <section className="py-20 bg-[#262626]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About MG Lifts
            </h1>
            <p className="text-xl text-white">
            Your trusted partner in aerial equipment rental solutions since 2010
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto pt-20">

        <div className="mx-10 md:mx-0 grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-white text-2xl font-semibold  mb-4">Our Story</h2>
            <p className="text-text-secondary mb-4">
              MG Lifts has been a leading provider of elevator and lift
              solutions for over two decades. Founded with a vision to
              revolutionize vertical transportation, we have grown to become a
              trusted name in the industry.
            </p>
            <p className="text-text-secondary">
              Our commitment to quality, safety, and innovation has made us the
              preferred choice for residential and commercial projects across
              the region.
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold  mb-4">Our Mission</h2>
            <p className="text-text-secondary mb-4">
              To provide safe, reliable, and efficient lift solutions that
              enhance the quality of life and improve accessibility for
              everyone.
            </p>
            <p className="text-text-secondary">
              We strive to exceed customer expectations through innovative
              technology, exceptional service, and unwavering commitment to
              safety standards.
            </p>
          </div>
        </div>

        <div className="bg-[#262626] border border-gray-600 rounded-xl p-8 mb-8 mx-10 md:mx-0">
          <h2 className="text-white text-2xl font-semibold  mb-6 text-center">
            Why Choose MG Lifts?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-white font-semibold  mb-2">20+ Years Experience</h3>
              <p className="text-white text-sm">
                Decades of expertise in lift installation and maintenance
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-white font-semibold  mb-2">Certified Technicians</h3>
              <p className="text-white text-sm">
                Highly trained and certified professionals
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-white font-semibold  mb-2">24/7 Support</h3>
              <p className="text-white text-sm">
                Round-the-clock emergency support and maintenance
              </p>
            </div>
          </div>
        </div>

        <div className="text-center md:mb-20 mx-10 md:mx-0">
          <h2 className="text-white text-2xl font-semibold  mb-4">Our Team</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Our dedicated team of engineers, technicians, and support staff work
            tirelessly to ensure your lift systems operate smoothly and safely.
            We believe in continuous learning and staying updated with the
            latest technologies in the industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
