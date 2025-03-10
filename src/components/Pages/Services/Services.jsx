import React, { useState } from "react";
import { Grid, List, ChevronDown, Search, Heart } from "lucide-react";

const services = [
  { id: 1, title: "Electric Panel Repairing", category: "Appliance", location: "Vancouver, Washington", price: 45, image: "https://source.unsplash.com/300x200/?electrician", rating: 0 },
  { id: 2, title: "Computer & Server AMC", category: "Computer", location: "Montana, USA", price: 150, image: "https://source.unsplash.com/300x200/?computer", rating: 0 },
  { id: 3, title: "Car Engine Services", category: "Car Wash", location: "Paris 17", price: 320, oldPrice: 350, image: "https://source.unsplash.com/300x200/?car", rating: 0 },
  { id: 4, title: "Home Construction", category: "Construction", location: "New York, USA", price: 800, image: "https://source.unsplash.com/300x200/?construction", rating: 0 },
];

const GridWithSidebar = () => {
  const [gridView, setGridView] = useState(true);

  return (
    <div className="pt-24"> 
    <div className="container mx-auto p-6 ">
      {/* Page Title */}
      <h2 className="text-3xl font-bold text-center mb-4">Our Company Services</h2>

      <div className="flex gap-6">
        {/* Sidebar Filters */}
        <div className="w-1/4 bg-gray-200 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-3">Filters</h3>
          
          <div className="mb-4">
            <label className="block font-medium">Keyword</label>
            <input type="text" placeholder="What are you looking for?" className="w-full p-2 border rounded mt-1" />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Location</label>
            <div className="relative">
              <select className="w-full p-2 border rounded mt-1 appearance-none">
                <option>Location</option>
                <option>New York</option>
                <option>California</option>
              </select>
              <ChevronDown className="absolute right-3 top-3 text-gray-500" size={18} />
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-medium">Select Category</label>
            <div className="relative">
              <select className="w-full p-2 border rounded mt-1 appearance-none">
                <option>Choose a category</option>
                <option>Appliance</option>
                <option>Computer</option>
                <option>Car Wash</option>
              </select>
              <ChevronDown className="absolute right-3 top-3 text-gray-500" size={18} />
            </div>
          </div>

          <button className="w-full bg-black text-white p-2 rounded mt-2 flex items-center justify-center gap-2">
            <Search size={18} /> Search
          </button>
        </div>

        {/* Main Content */}
        <div className="w-3/4">
          {/* Top Sorting and View Controls */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Found <span className="text-pink-500">12</span> Services</h3>

            <div className="flex items-center gap-3">
              <select className="border p-2 rounded">
                <option>Newest Listings</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>

              <button onClick={() => setGridView(true)} className={`p-2 rounded ${gridView ? "bg-pink-500 text-white" : "bg-gray-200"}`}>
                <Grid size={18} />
              </button>
              <button onClick={() => setGridView(false)} className={`p-2 rounded ${!gridView ? "bg-pink-500 text-white" : "bg-gray-200"}`}>
                <List size={18} />
              </button>
            </div>
          </div>

          {/* Services Grid/List View */}
          <div className={`${gridView ? "grid grid-cols-3 gap-4" : "flex flex-col gap-4"}`}>
            {services.map((service) => (
              <div key={service.id} className="bg-white shadow-md rounded-lg p-4 relative">
                <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded" />
                
                <span className="absolute top-3 left-3 bg-pink-500 text-white px-2 py-1 text-xs rounded">{service.category}</span>

                <h4 className="text-lg font-bold mt-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.location}</p>
                
                <div className="flex items-center justify-between mt-2">
                  <p className="text-lg font-bold">£{service.price}.00 {service.oldPrice && <span className="text-gray-400 line-through text-sm">£{service.oldPrice}.00</span>}</p>
                  <button className="bg-pink-500 text-white px-3 py-1 rounded text-sm">Book Now</button>
                </div>

                <button className="absolute top-3 right-3 text-gray-600 hover:text-pink-500">
                  <Heart size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default GridWithSidebar;
