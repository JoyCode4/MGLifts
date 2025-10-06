import React from "react";
import CardDetails from "../components/CardDetails";
import GridComponent from "../components/GridComponent";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Residential Elevators",
      description:
        "Sleek and efficient home elevators designed for comfort and style in residential buildings",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      price: "From $35,000",
    },
    {
      id: 2,
      title: "Commercial Lifts",
      description:
        "High-capacity commercial elevators for office buildings, shopping centers, and hotels",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      price: "From $75,000",
    },
    {
      id: 3,
      title: "Freight Elevators",
      description:
        "Heavy-duty freight elevators for industrial and warehouse applications",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      price: "From $95,000",
    },
    {
      id: 4,
      title: "Accessibility Lifts",
      description:
        "Wheelchair-accessible lifts and platform lifts for improved building accessibility",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      price: "From $25,000",
    },
    {
      id: 5,
      title: "Smart Elevators",
      description:
        "AI-powered elevators with smart controls, energy efficiency, and predictive maintenance",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      price: "From $120,000",
    },
    {
      id: 6,
      title: "Glass Elevators",
      description:
        "Stunning panoramic glass elevators perfect for luxury buildings and architectural showcases",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      price: "From $150,000",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold  mb-4">Our Products</h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Discover our comprehensive range of lift and elevator solutions. Each
          product is engineered for reliability, safety, and performance,
          meeting the highest industry standards.
        </p>
      </div>

      <div className="mb-12">
        <GridComponent>
          {products.map((product) => (
            <CardDetails key={product.id} {...product} />
          ))}
        </GridComponent>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-primary-secondary border border-border-primary rounded-lg p-6">
          <h3 className="text-xl font-semibold  mb-4">Product Features</h3>
          <ul className="space-y-2 text-text-secondary">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Energy-efficient operation
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Advanced safety systems
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Smooth and quiet operation
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Customizable design options
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Remote monitoring capabilities
            </li>
          </ul>
        </div>

        <div className="bg-primary-secondary border border-border-primary rounded-lg p-6">
          <h3 className="text-xl font-semibold text-primary-gold mb-4">
            Warranty & Support
          </h3>
          <ul className="space-y-2 text-primary-gold">
            <li className="flex items-center">
              <span className="text-primary-gold mr-2">✓</span>
              5-year comprehensive warranty
            </li>
            <li className="flex items-center">
              <span className="text-primary-gold mr-2">✓</span>
              Free maintenance for first year
            </li>
            <li className="flex items-center">
              <span className="text-primary-gold mr-2">✓</span>
              24/7 technical support
            </li>
            <li className="flex items-center">
              <span className="text-primary-gold mr-2">✓</span>
              Spare parts availability
            </li>
            <li className="flex items-center">
              <span className="text-primary-gold mr-2">✓</span>
              Training for building staff
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold  mb-4">
          Ready to Choose Your Perfect Lift?
        </h2>
        <p className="text-text-secondary mb-6">
          Contact our experts to discuss your requirements and get a customized
          quote.
        </p>
        <button className="btn-primary">Request Quote</button>
      </div>
    </div>
  );
};

export default Products;
