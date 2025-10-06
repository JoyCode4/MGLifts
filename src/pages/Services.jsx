import React from "react";
import CardDetails from "../components/CardDetails";
import GridComponent from "../components/GridComponent";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Lift Installation",
      description:
        "Complete installation services for new lift systems with modern technology and safety features",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      price: "Custom Quote",
    },
    {
      id: 2,
      title: "Maintenance & Repair",
      description:
        "Regular maintenance schedules and prompt repair services to keep your lifts running smoothly",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      price: "Monthly Plans",
    },
    {
      id: 3,
      title: "Modernization",
      description:
        "Upgrade your existing lift systems with modern technology, improved safety, and energy efficiency",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      price: "From $15,000",
    },
    {
      id: 4,
      title: "Emergency Services",
      description:
        "24/7 emergency response team for lift breakdowns and safety incidents",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      price: "24/7 Available",
    },
    {
      id: 5,
      title: "Safety Inspections",
      description:
        "Comprehensive safety inspections and compliance checks according to industry standards",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      price: "Annual Plans",
    },
    {
      id: 6,
      title: "Consultation Services",
      description:
        "Expert consultation for lift planning, design, and optimization for your building needs",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      price: "Free Initial",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold  mb-4">Our Services</h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          We offer comprehensive lift solutions tailored to meet your specific
          needs. From installation to maintenance, our expert team ensures your
          vertical transportation systems operate safely and efficiently.
        </p>
      </div>

      <div className="mb-12">
        <GridComponent>
          {services.map((service) => (
            <CardDetails key={service.id} {...service} />
          ))}
        </GridComponent>
      </div>

      <div className="bg-gradient-to-r from-primary-gold to-primary-gold-hover rounded-lg p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="text-xl mb-6 opacity-90">
          Every building is unique. Let us design a lift solution that perfectly
          fits your requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary-bg text-primary-gold px-8 py-3 rounded-lg font-semibold hover:bg-primary-secondary transition-colors">
            Schedule Consultation
          </button>
          <button className="btn-secondary">Download Brochure</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
