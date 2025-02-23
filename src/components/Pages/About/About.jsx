import React from 'react'
import { FaUsers, FaHandshake, FaFileAlt, FaBriefcase } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import HowItWorks from './How';
import WhyChooseUs from './Faq';
import Footer from '../Footer/Footer';
const About = () => {

  const stats = [
    { icon: <FaUsers size={40} className="text-pink-500" />, number: "2083+", label: "Satisfied Clients" },
    { icon: <FaHandshake size={40} className="text-pink-500" />, number: "30+", label: "Expert Team" },
    { icon: <FaFileAlt size={40} className="text-pink-500" />, number: "2000+", label: "Project Completed" },
    { icon: <FaBriefcase size={40} className="text-pink-500" />, number: "9+", label: "Years of experience" }
  ];
  const navigate = useNavigate();
  return (
    <div>

      <div className='pt-20'>
        <div className="text-center mb-6 pt-10">
          <h2 className="text-3xl font-bold text-gray-900">About</h2>
          <div className="flex justify-center items-center text-pink-600 mt-1">
            <FaHome onClick={() => { navigate('/') }} className="mr-2" />
            <span className="text-gray-500"> &gt; About</span>
          </div>
        </div>
        <section className="py-16 px-6 md:px-20 bg-white">

          <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Left Side - Image Section */}
            <div className="relative w-full md:w-1/2">

              <div className="bg-purple-500 rounded-lg p-2">
                <img
                  src="https://truelysell-wp.dreamstechnologies.com/wp-content/uploads/2024/10/about-01.jpg"
                  alt="Technician at Work"
                  className="rounded-lg transform transition-transform duration-300 hover:scale-80"
                />
              </div>
            </div>

            {/* Right Side - Text Section */}
            <div className="w-full md:w-1/2">
              <h3 className="text-gray-600 font-semibold uppercase text-sm mb-2">
                About Our Company
              </h3>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Best Solution For Cleaning Services
              </h2>
              <p className="text-gray-600 mb-6">
                Welcome to Truelysell, your premier destination for connecting with
                top-rated service providers and finding the perfect match for your
                needs. Our platform simplifies the process of discovering,
                evaluating, and hiring trusted professionals for a wide range of
                services.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  ✅ We prioritize quality and reliability
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  ✅ Clear, detailed service listings & reviews
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  ✅ We save your time and effort
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  ✅ Smooth and satisfactory experience
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      {/* How it works  */}
      <section>
        <HowItWorks></HowItWorks>
      </section>
      <section>
        <WhyChooseUs></WhyChooseUs>
      </section>
      {/* Stats  */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center p-8">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center transform transition-transform duration-300 hover:scale-50">
              {item.icon}
              <h2 className="text-2xl font-bold text-gray-900 mt-2">{item.number}</h2>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
      <div class="flex items-center justify-center min-h-screen p-4">
        <div class="bg-gray-900 text-white rounded-2xl shadow-lg p-6 md:p-12 flex flex-col md:flex-row items-center max-w-5xl w-full">
            <div class="md:w-2/3 text-center md:text-left">
                <h1 class="text-3xl md:text-4xl font-bold mb-4">Looking for the Best Service Finder & Bookings</h1>
                <p class="text-gray-300 mb-6">We offer a comprehensive directory of top-rated service providers, detailed profiles, and customer reviews.</p>
                <button class="bg-white text-gray-900 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-200 transition">Get Started →</button>
            </div>
            <div class="md:w-1/3 mt-6 md:mt-0 flex justify-center items-end">
            <img src={"https://truelysell-wp.dreamstechnologies.com/wp-content/uploads/2024/10/repair-img-1.png"} alt="Service Worker" className="w-56 md:w-64 h-64 md:h-80 rounded-lg shadow-md transform hover:scale-110 transition duration-300" />
            </div>
        </div>
    </div>
      </section>

      <section>
        <Footer></Footer>
      </section>

    </div>
  )
}

export default About