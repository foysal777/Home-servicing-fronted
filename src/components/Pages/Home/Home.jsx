import React from 'react'


const Home = () => {
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

      </section>

    </div>
  )
}

export default Home