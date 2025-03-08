import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import axios from 'axios';

export default function LoginPage() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send the POST request to the login API
      const response = await axios.post('http://127.0.0.1:8000/authentications/login/', { email, password });

      // Ensure response contains the necessary token (access token)
      if (response.data.access) {
        // Store token in localStorage
        localStorage.setItem('authToken', response.data.access);
        alert("login successfull")
        // Redirect user to the home page or dashboard
        navigate('/');
      } else {
        // Handle case when token is not received
        setError('Failed to receive a valid token.');
      }
    } catch (err) {
      // Catch any errors and show an error message
      if (err.response && err.response.data) {
        setError(err.response.data.error || 'Invalid credentials. Please try again.');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Login</h2>
          <div className="flex justify-center items-center text-pink-600 mt-1">
            <FaHome onClick={() => navigate('/')} className="mr-2" />
            <span className="text-gray-500"> &gt; Login</span>
          </div>
        </div>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              placeholder="example@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border  border-pink-500  rounded-md bg-gray-100 text-gray-600"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input 
                type="password" 
                placeholder="************" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border  border-pink-500  rounded-md bg-gray-100 text-gray-600"
              />
              <span className="absolute right-3 top-2.5 cursor-pointer text-gray-500">👁️</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm mb-4">
            <p className="text-gray-500">Must be 6 Characters at Least</p>
            <Link to="" className="text-pink-600">Forgot password?</Link>
          </div>

          <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded-md text-lg font-semibold">
            Sign in
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-pink-600 font-bold">Register</Link>
        </p>
      </div>
    </div>
  );
}
