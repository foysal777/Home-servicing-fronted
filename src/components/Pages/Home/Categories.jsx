import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Categories() {


  fetch('http://127.0.0.1:8000/user/profile', {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc0MTk2MTg3OSwiaWF0IjoxNzQxODc1NDc5LCJqdGkiOiIzNDIwY2YzMTM1YTg0MWIzYTYzYmNjNTU2MGY4OTU0NSIsInVzZXJfaWQiOjh9.V_q67_EZhkh6e1VgO7V_Qh8pHhLl8jh60KjnfBs-13k',
    }
})
.then(response => response.json())
.then(data => {
    console.log(data);  // ইউজারের ডিটেইলস এখানে পাবেন
})
.catch(error => console.error('Error:', error));





  const navigate = useNavigate();
  const [categories, setCategories] = useState([]); 

  useEffect(() => {
    fetch("http://127.0.0.1:8000/categories/api/categories/") 
      .then((response) => response.json())
      .then((data) => setCategories(data)) 
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 text-center cursor-pointer transform transition duration-300 hover:scale-105 hover: border border-blue-500"
            onClick={() => navigate(`/category/${category.name.toLowerCase()}`)}
          >
            <div className="text-4xl mb-3">
              <img src={category.icon} alt={category.name} className="w-12 h-12 mx-auto" />
            </div>
            <h2 className="text-lg font-semibold">{category.name}</h2>
            <p className="text-gray-500">{category.listings} Listings</p>
          </div>
        ))}
      </div>
    </div>
  );
}
