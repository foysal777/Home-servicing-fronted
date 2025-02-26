import React from 'react'
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import TruelysellWorkflow from './Work';
import Footer from '../Footer/Footer';
import Categories from './Categories';

const Home = () => {


  // "https://img.freepik.com/premium-photo/close-up-woman-cleaning-window_23-2148520993.jpg?ga=GA1.1.1673100480.1739595697&semt=ais_hybrid",
  // "https://img.freepik.com/free-photo/beautiful-young-woman-protective-gloves-cleaning-oven-with-rag_231208-551.jpg?ga=GA1.1.1673100480.1739595697&semt=ais_hybrid"


  const images = [
    {
      src: "https://img.freepik.com/free-photo/professional-cleaning-service-person-using-steam-cleaner-office_23-2150520602.jpg?ga=GA1.1.1673100480.1739595697&semt=ais_hybrid",
      title: "Floor Cleaning Service", description: "Start with 50$"
    },
    {
      src: "https://img.freepik.com/premium-photo/janitor-cleaning-office-desk_1016675-2585.jpg?ga=GA1.1.1673100480.1739595697&semt=ais_hybrid",
      title: "Office Table Cleaning", description: "Start with 75$"
    },
    {
      src: "https://img.freepik.com/free-photo/professional-washer-blue-uniform-washing-luxury-car-with-water-gun-open-air-car-wash_496169-333.jpg?ga=GA1.1.1673100480.1739595697&semt=ais_hybrid",
      title: "Car wasing Service", description: "Start with 200$"
    },
    {
      src: "https://img.freepik.com/premium-photo/cleaning-concept-young-woman-washing-floor-kitchen_141188-2576.jpg?ga=GA1.1.1673100480.1739595697&semt=ais_hybrid",
      title: "Deep cleaning Service ", description: "Start with 500$"
    },
    {
      src: "https://img.freepik.com/free-photo/technician-checking-heating-system-boiler-room_169016-53010.jpg?ga=GA1.1.1673100480.1739595697&semt=ais_hybrid",
      title: "Plumbing Service", description: "Start with 100$"
    },
    {
      src: "https://img.freepik.com/premium-photo/woman-fixing-kitchen-sink_53876-72053.jpg?ga=GA1.1.1673100480.1739595697&semt=ais_hybrid",
      title: "Basin Pipe Service", description: "Start with 250$"
    }
  ];

  return (
    <div>

      <section className='pt-16'>

        {/* Hero section  */}
        <section>

          <div className="min-h-screen bg-gradient-to-br from-purple-100 to-white p-6 flex flex-col md:flex-row items-center">
            {/* Left Side Text Section */}
            <div className="w-full md:w-1/2 text-center flex flex-col justify-center">
              <h1 className="text-3xl font-bold text-gray-900">
                Connect with Nearby Top-rated Professionals
              </h1>
              <p className="text-gray-600 mt-2">
                We can connect you to the right service, first time and every time.
              </p>

              {/* Popular Searches */}
              <div className="flex justify-center space-x-2 mt-6 flex-wrap">
                <span className="px-4 py-2 bg-gray-200 rounded-full text-gray-700 cursor-pointer">
                  Appliance
                </span>
                <span className="px-4 py-2 bg-gray-200 rounded-full text-gray-700 cursor-pointer">
                  Car Wash
                </span>
                <span className="px-4 py-2 bg-gray-200 rounded-full text-gray-700 cursor-pointer">
                  Carpentry
                </span>
              </div>

              {/* Stats */}
              <div className="mt-10 flex justify-center space-x-6 flex-wrap">
                <div className="p-6 w-40 sm:w-60 text-center bg-white shadow-lg rounded-xl">
                  <h3 className="text-xl sm:text-2xl font-bold">215,292+</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Verified Providers</p>
                </div>
                <div className="p-6 w-40 sm:w-60 text-center bg-white shadow-lg rounded-xl">
                  <h3 className="text-xl sm:text-2xl font-bold">90,000+</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Services Completed</p>
                </div>
                <div className="p-6 w-40 sm:w-60 text-center bg-white shadow-lg rounded-xl">
                  <h3 className="text-xl sm:text-2xl font-bold">2,390,968</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Reviews Globally</p>
                </div>
              </div>

              {/* Rating Box */}
              <div className="mt-6 flex justify-center">
                <div className="flex items-center bg-yellow-100 px-4 py-2 rounded-lg">
                  ⭐ <span className="ml-2 text-gray-900 font-semibold">4.9 / 5 (255 reviews)</span>
                </div>
              </div>
            </div>

            {/* Right Side Image Slider */}
            <div className="w-full md:w-1/2 relative mt-10 md:mt-0">
              <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-xl ">
                <div className="animate-slider flex w-[200%]">
                  <img src="src/assets/p-2.png" alt="Makeup Artist" className="w-1/2 md:w-1/2 h-2/3 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

          <section>

            <Categories></Categories>
          </section>

        {/* Our Feature services  */}

        <section>

          <div className="overflow-hidden w-full bg-gray-100 py-10 ">

            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold">
                Our Featured <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">Services</span>
              </h1>
              <p className="text-gray-600 mt-2">Each listing is designed to be clear and concise, providing customers</p>
            </div>
            <motion.div
              className="flex w-max gap-4 "
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
            >
              {[...images, ...images].map((item, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-4 w-72 transform transition-transform duration-300 hover:scale-105">
                  <img src={item.src} alt={`slide-${index}`} className="w-full h-48 object-cover rounded-lg" />
                  <h3 className="text-lg font-bold mt-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <div className="flex items-center justify-end mt-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <Star className="w-5 h-5 text-yellow-500" />
                    <Star className="w-5 h-5 text-yellow-500" />

                    <Star className="w-5 h-5 text-gray-300" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </section>

        <section>
          <TruelysellWorkflow></TruelysellWorkflow>
        </section>
        <section>
          <Footer></Footer>
        </section>

      </section>
    </div>
  )
}

export default Home