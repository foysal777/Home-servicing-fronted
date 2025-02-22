import React from 'react'
import { Link ,Navigate, useNavigate} from "react-router-dom";
import { FaHome } from "react-icons/fa";
const About = () => {
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
                  src="https://truelysell-wp.dreamstechnologies.com/wp-content/uploads/2024/10/about-01.jpg" // এখানে আপনার ইমেজ লিংক বসান
                  alt="Technician at Work"
                  className="rounded-lg"
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
    </div>
  )
}

export default About