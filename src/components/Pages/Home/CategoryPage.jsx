import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CategoryPage() {
  const { categoryName } = useParams();  
  // console.log(categoryName);  // Check category slug
  const [categoryDetails, setCategoryDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
   
    fetch(`http://127.0.0.1:8000/categoriesPage/api/category/${categoryName}/`)  
      .then((response) => response.json())
      .then((data) => {
        setCategoryDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching category details:", error);
        setLoading(false);
      });
  }, [categoryName]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-pink-500"></div>
      </div>
    );
  }

  if (!categoryDetails) {
    return <div className="text-center text-gray-600">No data found.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold text-center">{categoryDetails.name}</h1>
      <p className="text-gray-600 text-center mb-4">{categoryDetails.description}</p>

      <div className="space-y-6">
        {categoryDetails.listings.map((listing, index) => (
          <div
            key={index}
            className="bg-white shadow-lg border-2 border-pink-400 rounded-lg overflow-hidden flex h-56 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img src={listing.image} alt={listing.title} className="w-48 h-full object-cover" />

            <div className="p-6 flex-1">
              <h2 className="text-xl font-semibold">{listing.title}</h2>
              <p className="text-gray-500">{listing.location}</p>
              <div className="flex items-center mt-2">
                <img
                  src={listing.image}
                  alt="User"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span className="text-red-500">❤️ 0</span>
              </div>
            </div>

            <div className="p-6 flex flex-col justify-between items-end">
              <p className="text-lg font-bold text-gray-900">£{listing.price}</p>
              <button className="bg-pink-500 text-white px-5 py-2 rounded-md hover:bg-pink-600 transition duration-300">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
