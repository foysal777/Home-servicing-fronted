import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, User, Lock, ShoppingCart } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [authToken, setAuthToken] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [userRole, setUserRole] = useState(false);
  const navigate = useNavigate();
  const profileRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const role = localStorage.getItem("is_superuser") === "true";
    setAuthToken(token);
    setUserRole(role);
  }, []);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("is_superuser");
    setAuthToken(null);
    setUserRole(false);
    setProfileOpen(false);
    toast.success("Logout successful! 🎉", { position: "top-center" });
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src="https://cdn-icons-png.freepik.com/256/11923/11923001.png?uid=R86563100&ga=GA1.1.1673100480.1739595697"
            alt="Logo"
            className="h-12 w-auto"
          />
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Items */}
        <ul
          className={`font-bold md:flex md:items-center md:gap-6 absolute md:static top-16 left-0 w-full bg-white md:w-auto shadow-md md:shadow-none md:flex-row flex-col transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          {authToken && (
            <>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 p-2 block"
                      : "hover:text-pink-600 p-2 block"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 p-2 block"
                      : "hover:text-pink-600 p-2 block"
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 p-2 block"
                      : "hover:text-pink-600 p-2 block"
                  }
                >
                  Services
                </NavLink>
              </li>

              {/* Categories Dropdown */}
              <li className="relative">
                <button
                  className="flex items-center hover:text-pink-600 p-2"
                  onClick={() => setCategoriesOpen(!categoriesOpen)}
                >
                  Categories <ChevronDown size={16} />
                </button>
                <ul
                  className={`${
                    categoriesOpen ? "block" : "hidden"
                  } absolute bg-white shadow-md rounded-md mt-2 py-2 w-40 z-40`}
                >
                  {[
                    "Appliance",
                    "Cleaning",
                    "Car Wash",
                    "Plumbing",
                    "Computer",
                    "Construction",
                  ].map((cat) => (
                    <li key={cat} className="p-2 hover:bg-gray-100">
                      <NavLink
                        to={`/category/${cat.toLowerCase()}`}
                        className={({ isActive }) =>
                          isActive ? "text-blue-600" : "hover:text-pink-600"
                        }
                        onClick={() => setCategoriesOpen(false)}
                      >
                        {cat}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 p-2 block"
                      : "hover:text-pink-600 p-2 block"
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 p-2 block"
                      : "hover:text-pink-600 p-2 block"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </>
          )}
        </ul>

        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {authToken ? (
            <div ref={profileRef} className="relative flex items-center gap-4">
              <button
                onClick={() => navigate("/my-bookings")}
                className="relative bg-pink-500 p-2 rounded-md hover:bg-blue-500 transition-all duration-300"
              >
                <ShoppingCart size={20} className="text-white" />
              </button>

              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center bg-gradient-to-r from-blue-500 to-pink-500 px-4 py-2 rounded-md text-white hover:from-sky-500 hover:to-green-500 transition-all duration-300"
              >
                <User size={16} className="mr-2" /> Profile
              </button>

              {profileOpen && (
                <div className="absolute top-full mt-2 right-0 w-48 bg-white shadow-lg rounded-lg z-50">
                  {userRole && (
                    <NavLink
                      to="/admin-dashbord"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Admin Dashboard
                    </NavLink>
                  )}
                  <NavLink
                    to="/my-profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    My Profile
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="flex items-center bg-gray-200 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-300"
              >
                <Lock size={16} className="mr-2" /> Sign In
              </button>
              <button
                onClick={() => navigate("/register")}
                className="flex items-center bg-gradient-to-r from-pink-500 to-blue-500 px-4 py-2 rounded-md text-white hover:opacity-80"
              >
                <User size={16} className="mr-2" /> Join Us
              </button>
            </>
          )}
          <ToastContainer autoClose={2000} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
