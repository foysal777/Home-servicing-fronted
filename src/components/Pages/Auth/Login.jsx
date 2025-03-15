import { useState } from 'react';
import { data, Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/authentications/login/', { email, password });

      if (response.data.access) {
        localStorage.setItem('authToken', response.data.access);
       console.log(data.access);
       const isSuperUser = response.data.is_superuser;  
       const isStaff = response.data.is_staff;
 
        toast.success("Login successful! & Please Refresh web Page 🎉", { position: "top-center" });
        setTimeout(() => {
          if (isSuperUser || isStaff) {
            navigate('/admin-dashbord'); // Redirect to admin page
          } else {
            navigate('/'); // Redirect regular users to home
          }
        }, 2000);
      } 
      
      
      
      
      else {
        toast.error("Failed to receive a valid token.", { position: "top-center" });
      }
    } catch (err) {
      if (err.response && err.response.data) {
        toast.error(err.response.data.error || "Invalid credentials. Try again!", { position: "top-center" });
      } else {
        toast.error("An error occurred. Please try again.", { position: "top-center" });
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Login</h2>
          <div className="flex justify-center items-center text-pink-600 mt-1">
            <FaHome onClick={() => navigate('/')} className="mr-2 cursor-pointer" />
            <span className="text-gray-500"> &gt; Login</span>
          </div>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-pink-500 rounded-md bg-gray-100 text-pink-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-zinc-900 mb-1">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-pink-500 rounded-md bg-gray-100 text-gray-600"
              />
              <span className="absolute right-3 top-2.5 cursor-pointer text-gray-500">👁️</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm mb-4">
            <p className="text-gray-500">Must be 6 Characters at Least</p>
            <Link to="" className="text-pink-600">Forgot password?</Link>
          </div>

          <button type="submit" className="w-full bg-pink-500 text-white py-2 hover:bg-purple-500 rounded-md text-lg font-semibold">
            Sign in
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-pink-600 font-bold">Register</Link>
        </p>
      </div>

      <ToastContainer autoClose={2000} />
    </div>
  );
}
