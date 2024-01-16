import React from "react";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="div">
        <div key={product.id} className="flex flex-col items-center p-8">
          <img
            src={product.image}
            alt={product.name}
            style={{ width: 160, height: 213.33 }}
            className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer mb-2"
          />
          <p className="text-gray-700">{product.name}</p>
          <p className="text-gray-500 font-semibold">${product.price}</p>
          <p className="text-green-800 cursor-pointer">
            <product.icon />
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
