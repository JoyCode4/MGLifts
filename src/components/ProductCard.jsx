import { Link } from "react-router-dom";
import { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import ImageLightbox from "./ImageLightbox";

const ProductCard = ({
  id,
  title,
  image,
  images,
  specs,
  price,
  type = "sales",
}) => {
  // Use images array if available, otherwise fallback to single image
  const productImages = images && images.length > 0 ? images : [image];

  // Lightbox state
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index = 0) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const onGetQuote = (message) => {
    const whatsappUrl = `https://wa.me/919960731781?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div className="group card overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
        <div
          className="aspect-[4/3] overflow-hidden relative cursor-zoom-in"
          onClick={() => openLightbox(0)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              openLightbox(0);
            }
          }}
        >
          <ImageCarousel images={productImages} alt={title} />
          {price && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-[#D4AF37] to-[#E6C14A] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20 pointer-events-none">
              {price}
            </div>
          )}
          {/* Zoom indicator overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10 pointer-events-none">
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-xl">
              <svg
                className="w-5 h-5 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
              <span className="text-sm font-semibold text-gray-800">
                Click to enlarge
              </span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="card-title text-xl font-bold mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
            {title}
          </h3>
          {specs && (
            <div className="flex items-start mb-4">
              <svg
                className="w-4 h-4 text-[#D4AF37] mt-1 mr-2 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm text-gray-400">{specs}</p>
            </div>
          )}
          <Link
            onClick={() =>
              onGetQuote(
                `Dear M G Engineering Solutions Team,\nI am interested in obtaining a quote for the following equipment:\nProduct: ${title}\nPrice: ${
                  price ? price : "N/A"
                }\nSpecifications: ${specs ? specs : "N/A"}\nQuote Type: ${
                  type === "sales" ? "Sales" : "Rental"
                }\n\nKindly provide detailed pricing and availability for this product. Thank you.\nBest regards,\n<Your Name>`
              )
            }
            className="btn-primary w-full rounded-full block text-center font-semibold hover:shadow-xl transition-all duration-300"
          >
            {type === "sales" ? "Get Sales Quote" : "Get Rental Quote"}
          </Link>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      <ImageLightbox
        images={productImages}
        initialIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        title={title}
      />
    </>
  );
};

export default ProductCard;
