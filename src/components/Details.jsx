import React from "react";
import { Link, useLocation } from "react-router-dom";
import UnitCardDetails from "./UnitCardDetails";
import GridComponent from "./GridComponent";

const Details = () => {
  const location = useLocation();
  const { id, title, image, specs, price } = location.state || {};

  // Handle case where no state data is passed
  if (!location.state) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-primary mb-4">Product Not Found</h1>
          <p className="text-secondary">No product data available.</p>
        </div>
      </div>
    );
  }

  console.log("Received data:", { id, title, image, specs, price });
  const products = [
    {
      id: 1,
      title: "Articulated Double Lift 4B45J",
      image: "/assets/Articulated Double Lift Thumbnail.png",
      specs: "Max Platform Height: 45ft | Capacity: 500lbs",
      price: "$215/day",
    },
    {
      id: 2,
      title: "Scissor Lift Platform",
      image: "/assets/Compact Scissor Lift.png",
      specs: "Max Platform Height: 32ft | Capacity: 700lbs",
      price: "$185/day",
    },
    {
      id: 3,
      title: "Straight Boom Lift",
      image: "/assets/Homepage Illustration.png",
      specs: "Max Platform Height: 60ft | Capacity: 600lbs",
      price: "$250/day",
    },
    {
      id: 4,
      title: "Straight Boom Lift",
      image: "/assets/Saure Lift.png",
      specs: "Max Platform Height: 60ft | Capacity: 600lbs",
      price: "$250/day",
    },
    {
      id: 5,
      title: "Straight Boom Lift",
      image: "/assets/Articulated Double Lift Variation.png",
      specs: "Max Platform Height: 60ft | Capacity: 600lbs",
      price: "$250/day",
    },
    {
      id: 6,
      title: "Straight Boom Lift",
      image: "/assets/Large Telehandler.png",
      specs: "Max Platform Height: 60ft | Capacity: 600lbs",
      price: "$250/day",
    },
  ];
  return (
    <div>
      <div className="md:mx-auto relative h-full md:h-[90vh] flex justify-center items-center">
        <div className="relative mx-10 md:absolute top-16 md:h-[90vh] rounded-3xl overflow-hidden bg-black border-4 border-[#D4AF37] shadow-2xl">
          <img
            src={image}
            alt="logo"
            className="w-full h-full object-contain"
          />
          <div className="flex flex-col p-4 md:rounded-tr-2xl md:border-r-4 md:border-t-4 md:border-[#D4AF37] bg-white md:absolute bottom-0 left-0">
            <h1 className="text-xs sm:text-sm md:text-xl text-black uppercase font-bold">
              Product Details
            </h1>
            <p className="text-xs sm:text-sm md:text-md text-black">
              <span className="font-bold">Name:</span> {title}
            </p>
            <p className="text-xs sm:text-sm md:text-md text-black">
              <span className="font-bold">Price:</span> {price}
            </p>
            <p className="text-xs sm:text-sm md:text-md text-black">
              <span className="font-bold">Description:</span> {specs}
            </p>
            <p className="text-xs sm:text-sm md:text-md text-black">
              <span className="font-bold">Features:</span> {specs}
            </p>
          </div>
        </div>
      </div>
      <div className="px-10 xl:px-0 py-36 bg-white">
        <div className="container mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl text-black uppercase font-mono mb-4">
              Related Products
            </h1>
            {/* <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          We offer comprehensive lift solutions tailored to meet your specific
          needs. From installation to maintenance, our expert team ensures your
          vertical transportation systems operate safely and efficiently.
        </p> */}
          </div>

          <div className="mb-12">
            <GridComponent>
              {products.map((product) => (
                <Link
                  to={`/details/${product.id}`}
                  state={product}
                  key={product.id}
                >
                  <UnitCardDetails key={product.id} {...product} description={product.specs} />
                </Link>
              ))}
            </GridComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
