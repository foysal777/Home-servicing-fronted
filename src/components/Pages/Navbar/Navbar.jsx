import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, User, Lock } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);  // Categories dropdown toggle state
  const [authToken, setAuthToken] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false); // New state for profile dropdown
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setAuthToken(token);
  }, []);

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setAuthToken(null);
    setProfileOpen(false); // Close dropdown on logout
    navigate("/login");
  };

  // Function to handle category click and close dropdown
  const handleCategoryClick = () => {
    setCategoriesOpen(false); // Close the categories dropdown after clicking a category
  };

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold text-pink-600 flex items-center">
          <span>QRC</span>
        </NavLink>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Items */}
        <ul className={`font-bold md:flex md:items-center md:gap-6 absolute md:static top-16 left-0 w-full bg-white md:w-auto shadow-md md:shadow-none md:flex-row flex-col transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}>
          {authToken && <li><NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600 p-2 block" : "hover:text-pink-600 p-2 block"}>Home</NavLink></li>}
          {authToken && (
            <>
              <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-600 p-2 block" : "hover:text-pink-600 p-2 block"}>About Us</NavLink></li>
              <li><NavLink to="/services" className={({ isActive }) => isActive ? "text-blue-600 p-2 block" : "hover:text-pink-600 p-2 block"}>Services</NavLink></li>

              {/* Categories Dropdown */}
              <li className="relative">
                <button className="flex items-center hover:text-pink-600 p-2" onClick={() => setCategoriesOpen(!categoriesOpen)}>
                  Categories <ChevronDown size={16} />
                </button>
                <ul className={`${categoriesOpen ? "block" : "hidden"} absolute bg-white shadow-md rounded-md mt-2 py-2 w-40`}>
                  {['Appliance', 'Cleaning', 'Car Wash', 'Plumbing', 'Computer', 'Construction'].map((cat) => (
                    <li key={cat} className="p-2 hover:bg-gray-100">
                      <NavLink to={`/category/${cat.toLowerCase()}`} className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-pink-600"} onClick={handleCategoryClick}>
                        {cat}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>

              <li><NavLink to="/blog" className={({ isActive }) => isActive ? "text-blue-600 p-2 block" : "hover:text-pink-600 p-2 block"}>Blog</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-600 p-2 block" : "hover:text-pink-600 p-2 block"}>Contact</NavLink></li>
            </>
          )}
        </ul>

        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {authToken ? (
            // Logged-in User Profile & Logout
            <div className="relative">
              <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center bg-gradient-to-r from-blue-500 to-pink-500 px-4 py-2 rounded-md text-white hover:from-sky-500 hover:to-green-500 transition-all duration-300">
                <User size={16} className="mr-2" /> Profile
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md">
                  <NavLink to="/my-profile" className="block px-4 py-2 hover:bg-gray-100">My Profile</NavLink>
                  <NavLink to="/change-password" className="block px-4 py-2 hover:bg-gray-100">Change Password</NavLink>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">Logout</button>
                </div>
              )}
            </div>
          ) : (
            // Guest (Show Sign In & Register Button)
            <>
              <button onClick={() => navigate("/login")} className="flex items-center bg-gray-200 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-300">
                <Lock size={16} className="mr-2" /> Sign In
              </button>
              <button onClick={() => navigate("/register")} className="flex items-center bg-gradient-to-r from-pink-500 to-blue-500 px-4 py-2 rounded-md text-white hover:opacity-80">
                <User size={16} className="mr-2" /> Join Us
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
