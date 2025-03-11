import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Grid, List, ChevronDown, Search, Heart } from "lucide-react";

const GridWithSidebar = () => {
  const navigate = useNavigate();
  const [gridView, setGridView] = useState(true);
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState(""); // Category input
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(`http://127.0.0.1:8000/services/api/services/`)
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
        setFilteredServices(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filteredData = services;

    if (keyword.length >= 2) {
      filteredData = filteredData.filter(service =>
        service.title.toLowerCase().startsWith(keyword.toLowerCase().slice(0, 2))
      );
    }
    if (location.length >= 2) {
      filteredData = filteredData.filter(service =>
        service.location.toLowerCase().startsWith(location.toLowerCase().slice(0, 2))
      );
    }
    if (category) {
      filteredData = filteredData.filter(service =>
        service.category.toLowerCase().includes(category.toLowerCase()) // Case-insensitive filtering
      );
    }
    if (sortOption === "price-desc") {
      filteredData.sort((a, b) => b.price - a.price);
    } else if (sortOption === "alphabetical") {
      filteredData.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredServices(filteredData);
  }, [keyword, location, category, sortOption, services]);

  const handleResetFilters = () => {
    setKeyword("");
    setLocation("");
    setCategory(""); // Reset the category input
    setSortOption("");
    setFilteredServices(services); // Reset the filtered services to show all
  };

  return (
    <div className="pt-24">
      <div className="container mx-auto p-6 ">

        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">
            Our Major<span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text"> Services</span>
          </h1>          <div className="flex justify-center items-center text-pink-600 mt-1">
            <FaHome onClick={() => navigate('/')} className="mr-2 cursor-pointer" />
            <span className="text-gray-500"> &gt; Services</span>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-3">Filters</h3>


            <div className="mb-4">
              <label className="block font-medium">Category</label>
              <input
                type="text"
                placeholder="Enter category (e.g., Appliance, Car Wash)"
                className="w-full p-2 border border-pink-500 rounded mt-1"
                value={category}
                onChange={(e) => setCategory(e.target.value)} // Update category as user types
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Keyword</label>
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full p-2 border border-pink-500 rounded mt-1"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Location</label>
              <input
                type="text"
                placeholder="Enter location"
                className="w-full p-2 border border-pink-500 rounded mt-1"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <button
                onClick={handleResetFilters}
                className="w-full p-2 bg-pink-500 text-white rounded mt-2 hover:bg-purple-500"
              >
                Reset Filters
              </button>
            </div>
          </div>
          <div className="w-3/4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Found <span className="text-pink-500">{filteredServices.length}</span> Services</h3>
              <div className="flex items-center gap-3">
                <select
                  className="border border-pink-500 p-2 rounded"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="">Sort By</option>
                  <option className="text-pink-500" value="price-desc">Price: High to Low</option>
                  <option className="text-pink-500" value="alphabetical">Alphabetical (A-Z)</option>
                </select>
              </div>
            </div>
            {loading ? (
              <p className="text-center text-lg font-bold">Loading...</p>
            ) : filteredServices.length > 0 ? (
              <div className={`${gridView ? "grid grid-cols-3 gap-4" : "flex flex-col gap-4"}`}>
                {filteredServices.map((service) => (
                  <div key={service.id} className="bg-white shadow-md rounded-lg p-4 relative">
                    <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded" />
                    <span className="absolute top-3 left-3 bg-pink-500 text-white px-2 py-1 text-xs rounded">{service.category}</span>
                    <h4 className="text-lg font-bold mt-2">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.location}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-lg font-bold">£{service.price}</p>
                    </div>
                    <button className="absolute top-3 right-3  text-gray-600 hover:text-pink-500">
                      <Heart size={20} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-lg font-bold text-red-500">No services found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridWithSidebar;
