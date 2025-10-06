const ProductCard = ({ title, image, specs, price }) => {
  return (
    <div className="card overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="card-title text-xl font-semibold mb-2">{title}</h3>
        {specs && <p className="text-sm text-secondary mb-2">{specs}</p>}
        {price && (
          <p className="text-primary font-bold text-lg mb-4">{price}</p>
        )}
        <button className="btn-primary w-full rounded-full">Get Details</button>
      </div>
    </div>
  );
};

export default ProductCard;
