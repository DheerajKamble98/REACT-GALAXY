import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { VITE_BACKEND_URL } from "../App";

const Product = ({ product, getProducts }) => {
  const deleteProduct = async (id) => {
    const result = await Swal.fire({
      title: "Do you really want to delete the product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      try {
        await axios.delete(`${VITE_BACKEND_URL}/api/products/${id}`);
        toast.success("Product Deleted Successfully");
        getProducts();
      } catch (error) {
        toast.error(error.message);
      }
    }
  };
  return (
    <div className="bg-white rounded shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
      <img
        src={product.image}
        className="w-full h-48 object-cover"
        alt={product.name}
      />
      <div className="px-4 pt-2 pb-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <div className="text-sm flex justify-between items-center">
          <div className="flex items-center">
            <span className="mr-1">Quantity:</span>
            <span className="py-1 px-2 rounded-md">{product.quantity}</span>
          </div>
          <div className="text-sm">Price: ${product.price}</div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mb-4">
        <Link
          to={`/edit/${product._id}`}
          className="inline-block w-full text-center shadow-md text-sm bg-gray-700 text-white rounded-sm px-4 py-1 pr-2 pl-2 font-bold hover:bg-gray-600 hover:cursor-pointer transition duration-300 ease-in-out"
        >
          Edit
        </Link>
        <button
          onClick={() => deleteProduct(product._id)}
          className="inline-block text-center w-full shadow-md text-sm bg-red-700 text-white rounded-sm px-4 py-1 pr-2 pl-2 font-bold hover:bg-red-600 hover:cursor-pointer transition duration-300 ease-in-out"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default Product;
