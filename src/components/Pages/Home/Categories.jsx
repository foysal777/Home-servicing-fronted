import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Appliance", listings: 3, icon: "🏠" },
  { name: "Car Wash", listings: 2, icon: "🚗" },
  { name: "Cleaning", listings: 1, icon: "🧹" },
  { name: "Computer", listings: 2, icon: "💻" },
  { name: "Construction", listings: 2, icon: "🏗️" },
  { name: "Electrical", listings: 0, icon: "🔌" },
  { name: "Interior", listings: 1, icon: "🛋️" },
  { name: "Plumbing", listings: 1, icon: "🚰", new: true },
  { name: "Carpentry", listings: 1, icon: "🔨" },
];

export default function Categories() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 text-center cursor-pointer transform transition duration-300 hover:scale-105"
            onClick={() => navigate(`/category/${category.name.toLowerCase()}`)}
          >
            <div className="text-4xl mb-3">{category.icon}</div>
            <h2 className="text-lg font-semibold">{category.name}</h2>
            <p className="text-gray-500">{category.listings} Listings</p>
            {category.new && (
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full ml-2">New</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
