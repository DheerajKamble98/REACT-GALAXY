import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-purple-500 to-indigo-600 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link
            to="/"
            className="text-white text-3xl font-bold transition duration-500 ease-in-out transform hover:scale-105"
          >
            REACT GALAXY
          </Link>
          <div className="flex items-center">
            <Link
              to="/create"
              className="text-white mx-4 hover:underline transition duration-500 ease-in-out transform hover:scale-105"
            >
              Add Product
            </Link>
            <Link
              to="/"
              className="text-white hover:underline transition duration-500 ease-in-out transform hover:scale-105"
            >
              Home
            </Link>
          </div>
        </div>
      </nav>
      {/* Content */}
      <div className="container mx-auto flex-grow p-4">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/edit/:id" element={<EditPage />} />
        </Routes>
      </div>
      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-500 to-indigo-600 py-4 text-white text-center">
        <p className="text-lg font-semibold">
          Developed and Designed by Mr. Dheeraj Kamble
        </p>
        <p className="text-sm">
          MERN Full Stack Developer | Microfrontend Engineer | UX Designer |
          Next.js Developer
        </p>
        <p className="text-sm">
          Senior Software Engineer at Persistent Systems
        </p>
        <p className="text-sm">
          Mobile: 7972794130 | Email: dheerajkamble95@gmail.com
        </p>
      </footer>
      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
}
export default App;
