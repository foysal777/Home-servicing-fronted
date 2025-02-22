import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { div } from "motion/react-client";

export default function RegisterPage() {
  return (
    <div className="pt-14">
    <div className="flex justify-center items-center min-h-screen bg-gray-50 ">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Register</h2>
          <div className="flex justify-center items-center text-pink-600 mt-1">
            <FaHome className="mr-2" />
            <span className="text-gray-500"> &gt; Register</span>
          </div>
        </div>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              placeholder="John"
              className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-600"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Doe"
              className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-600"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="example@example.com"
              className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-600"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="************"
                className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-600"
              />
              <span className="absolute right-3 top-2.5 cursor-pointer text-gray-500">👁️</span>
            </div>
          </div>

          <button className="w-full bg-pink-500 text-white py-2 rounded-md text-lg font-semibold">
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-600 font-bold">Login</Link>
        </p>
      </div>
    </div>
    </div>
  );
}
