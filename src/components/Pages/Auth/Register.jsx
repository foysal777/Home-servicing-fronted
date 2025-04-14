import { useState } from "react";
import { FaHome } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.password2) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      await axios.post("https://home-service-backend-2.vercel.app/authentications/register/", formData);
      toast.success("Registration successful! Check your email.");
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Register</h2>
          <div className="flex justify-center items-center text-pink-600 mt-1">
            <FaHome onClick={() => navigate('/')} className="mr-2" />
            <span className="text-purple-500"> &gt; Register</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="border border-pink-500 p-2 w-full rounded my-2 text-purple-500"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border border-pink-500 p-2 w-full rounded my-2 text-purple-500"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border  border-pink-500 p-2 w-full rounded my-2 text-purple-500"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password2"
            placeholder="Confirm Password"
            className="border  border-pink-500 p-2 w-full rounded my-2 text-purple-500"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full py-2 mt-3 rounded text-white font-semibold bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-pink-500 font-semibold">
            Login
          </a>
        </p>
      </div>

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
