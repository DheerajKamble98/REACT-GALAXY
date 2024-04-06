import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { VITE_BACKEND_URL } from "../App";

const CreatePage = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const saveProduct = async (e) => {
    e.preventDefault();
    if (name === "" || quantity === "" || price === "" || image === "") {
      alert("Please fill out all the details correctly");
      return;
    }
    try {
      setIsLoading(true);
      const response = await axios.post(`${VITE_BACKEND_URL}/api/products`, {
        name: name,
        quantity: quantity,
        price: price,
        image: image,
      });
      toast.success(`Saved ${response.data.name} successfully`);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };
  return (
    <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6 transition duration-300 ease-in-out transform hover:scale-105">
      <h2 className="font-semibold text-2xl mb-4 block text-center">
        Create a Product
      </h2>
      <form onSubmit={saveProduct} className="space-y-4">
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400 transition duration-300 ease-in-out"
            placeholder="Enter Name"
          />
        </div>
        <div>
          <label>Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400 transition duration-300 ease-in-out"
            placeholder="Enter Quantity"
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400 transition duration-300 ease-in-out"
            placeholder="Enter Price"
          />
        </div>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400 transition duration-300 ease-in-out"
            placeholder="Enter Image URL"
          />
        </div>
        <div className="text-center">
          {!isLoading && (
            <button className="block w-full bg-violet-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-violet-600 hover:cursor-pointer transition duration-300 ease-in-out">
              Save
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
export default CreatePage;
