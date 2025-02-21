import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, User, Lock } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold text-pink-600 flex items-center">
          <span>Quick Response</span>
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
          className={ `font-bold md:flex md:items-center md:gap-6 absolute md:static top-16 left-0 w-full bg-white md:w-auto shadow-md md:shadow-none md:flex-row flex-col transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}
        >
          <li><NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600 p-2 block" : "hover:text-pink-600 p-2 block"}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-600 p-2 block" : "hover:text-pink-600 p-2 block"}>About Us</NavLink></li>
          <li><NavLink to="/services" className={({ isActive }) => isActive ? "text-blue-600 p-2 block" : "hover:text-pink-600 p-2 block"}>Services</NavLink></li>
          <li>
            <button
              className="flex items-center hover:text-pink-600 p-2"
              onClick={() => setCategoriesOpen(!categoriesOpen)}
            >
              Categories <ChevronDown size={16} />
            </button>
            <ul className={`${categoriesOpen ? "block" : "hidden"} absolute bg-white shadow-md rounded-md mt-2 py-2 w-40`}> 
              {['Web Design', 'SEO', 'Marketing', 'Development', 'Graphics'].map((cat) => (
                <li key={cat} className="p-2 hover:bg-gray-100"><NavLink to={`/${cat.toLowerCase()}`} className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-pink-600"}>{cat}</NavLink></li>
              ))}
            </ul>
          </li>
          <li>
            <button
              className="flex items-center hover:text-pink-600 p-2"
              onClick={() => setPagesOpen(!pagesOpen)}
            >
              Pages <ChevronDown size={16} />
            </button>
            <ul className={`${pagesOpen ? "block" : "hidden"} absolute bg-white shadow-md rounded-md mt-2 py-2 w-40`}>
              {['Portfolio', 'Testimonials', 'FAQ', 'Contact'].map((page) => (
                <li key={page} className="p-2 hover:bg-gray-100"><NavLink to={`/${page.toLowerCase()}`} className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-pink-600"}>{page}</NavLink></li>
              ))}
            </ul>
          </li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-600 p-2 block" : "hover:text-pink-600 p-2 block"}>Contact Us</NavLink></li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center bg-gray-200 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-300">
            <Lock size={16} className="mr-2" /> Sign In
          </button>
          <button className="flex items-center bg-gradient-to-r from-pink-500 to-blue-500 px-4 py-2 rounded-md text-white hover:opacity-80">
            <User size={16} className="mr-2" /> Join Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
