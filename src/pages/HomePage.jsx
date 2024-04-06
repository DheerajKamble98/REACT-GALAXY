import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import { VITE_BACKEND_URL } from "../App";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${VITE_BACKEND_URL}/api/products`);
      console.log(response.data);
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/create"
        className="inline-block mt-4 shadow-md bg-violet-700 text-white px-4 py-2 font-bold hover:bg-violet-600 transition duration-300 ease-in-out"
      >
        Add Product
      </Link>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <div className="home-loader-position">
            <div className="home-loader"></div>
          </div>
        ) : products.length > 0 ? (
          products.map((product, index) => (
            <Product
              key={index}
              product={product}
              getProducts={getProducts}
              className="transition duration-300 ease-in-out transform hover:scale-105"
            />
          ))
        ) : (
          <div className="text-center">There are no products</div>
        )}
      </div>
    </div>
  );
};
export default HomePage;
