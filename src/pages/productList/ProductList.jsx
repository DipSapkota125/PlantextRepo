import React from "react";
import { products } from "./ProductData";
import ProductCard from "./productCard/ProductCard";

const ProductList = ({ sectionRef }) => {
  return (
    <>
      <div className="my-8 text-center" id="products" ref={sectionRef}>
        <h2 className="text-4xl font-bold mb-4">
          Check out
          <br /> our products
        </h2>
        <p className="text-gray-600">
          Here are some selected plants from our showroom,
          <br /> all are in excellent shape and have a long life span.
          <br /> Buy and enjoy the best quality.
        </p>
      </div>
      <div className="font-sans flex justify-around items-center">
        <div className="flex flex-col md:flex-row p-8 max-w-screen-xl w-full">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
