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
      const response = await axios.post('https://home-service-backend-2.vercel.app/authentications/login/', { email, password });

      if (response.data.access) {
        localStorage.setItem('authToken', response.data.access);
        localStorage.setItem('is_superuser', response.data.is_superuser);
        console.log(response.data);
        const isSuperUser = response.data.is_superuser;
        const isStaff = response.data.is_staff;



        toast.success("Login successful! & Please Refresh web Page 🎉", { position: "top-center" });
        setTimeout(() => {
          if (isSuperUser || isStaff) {
            // navigate('/admin-dashbord'); 
            window.location.href = '/admin-dashbord'
          } else {
            window.location.href = '/';

          }
        }, 3000);
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

  <div className='pt-12'>  
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

    {/* Credential Info - Small Font */}
    <div className="mt-4 text-xs text-gray-500">
      <div className="mb-2">
        <p className='text-pink-500'><strong>Normal user</strong></p>
        <p>Email: foysal.cse11@gmail.com</p>
        <p>Password: Foy56##sal</p>
      </div>
      <div>
        <p  className='text-pink-500'><strong>Admin user</strong></p>
        <p>Email: admin@gmail.com</p>
        <p>Password: 123</p>
      </div>
    </div>
  </div>

  <ToastContainer autoClose={2000} />
</div>
</div>
  );
}
