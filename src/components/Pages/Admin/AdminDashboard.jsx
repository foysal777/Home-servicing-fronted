import { useState } from "react";
import { FaBars, FaBell, FaEnvelope, FaHome, FaUser, FaBlog, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="pt-16">
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-blue-600 text-white w-64 p-5 space-y-6 ${isOpen ? "block" : "hidden"} lg:block`}>
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <nav className="space-y-4">
          <button onClick={() => navigate("/")} className="flex items-center space-x-2 w-full text-left">
            <FaHome /> <span>Home</span>
          </button>
          <button onClick={() => navigate("/my-profile")} className="flex items-center space-x-2 w-full text-left">
            <FaUser /> <span>My Profile</span>
          </button>
          <button onClick={() => navigate("/admin-categories")} className="flex items-center space-x-2 w-full text-left">
            <FaBlog /> <span>Categoreis</span>
          </button>
          <button onClick={() => navigate("/admin-service")} className="flex items-center space-x-2 w-full text-left">
            <FaCalendarAlt /> <span>services</span>
          </button>
          <a href="#" className="flex items-center space-x-2"><FaBell /> Notifications <span className="bg-red-500 px-2 rounded-full">5</span></a>
          <a href="#" className="flex items-center space-x-2"><FaEnvelope /> Messages <span className="bg-green-500 px-2 rounded-full">2 New</span></a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Navbar */}
        <div className="flex justify-between items-center bg-white p-4 shadow-md">
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}><FaBars className="text-xl" /></button>
          <h2 className="text-xl text-center font-semibold">Admin Dashboard</h2>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white p-6 shadow-md rounded-md">
            <h3 className="text-2xl font-bold">2</h3>
            <p className="text-gray-500">Users</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md">
            <h3 className="text-2xl font-bold">10 <span className="text-green-500">+40%</span></h3>
            <p className="text-gray-500">cutomers</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md">
            <h3 className="text-2xl font-bold">4</h3>
            <p className="text-gray-500">Blogs</p>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white p-6 shadow-md rounded-md mt-6">
          <h3 className="text-lg font-semibold">Users</h3>
          <table className="w-full mt-4 border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Role</th>
                <th className="border p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="border p-2">Administrator</td>
                <td className="border p-2 text-blue-500">70%</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">User</td>
                <td className="border p-2 text-pink-500">40%</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">User</td>
                <td className="border p-2 text-red-500">60%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* User Growth Chart Placeholder */}
        <div className="bg-white p-6 shadow-md rounded-md mt-6">
          <h3 className="text-lg font-semibold">User Growth</h3>
          <p className="text-gray-500">Graph will be here </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdminDashboard;
