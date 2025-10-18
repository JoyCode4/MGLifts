import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  // Replace with your actual WhatsApp number (with country code, no + or spaces)
  // Example: "919876543210" for India
  const phoneNumber = "919960731781";

  const message =
    "Hello! I'm interested in learning more about M G Engineering Solutions services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-4xl" />

        {/* Tooltip */}
        <span className="absolute right-full mr-3 bg-gray-600 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with us on WhatsApp
        </span>

        {/* Pulse animation */}
        <span className="absolute inset-1 rounded-full bg-[#25D366] animate-ping opacity-40"></span>
      </button>
    </div>
  );
};

export default WhatsAppButton;
