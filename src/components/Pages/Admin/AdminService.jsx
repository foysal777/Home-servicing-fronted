import { useState } from "react";

export default function AdminService() {
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    image: "",
    price: "",
    rating: "",
    location: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:8000/services/api/services/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        setSubmittedData(data);
        alert("Service added successfully!");
      } else {
        alert("Failed to add service.");
      }
    } catch (err) {
      console.error(err);
      alert("Error occurred while adding service.");
    }
  };

  return (
    <div className="pt-24">
       
   
    <div className="grid grid-cols-2 gap-8 p-8">
      {/* Left: Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-2xl shadow-md"
      >
        <h2 className="text-xl font-bold mb-4">Add New Service</h2>

        {["category", "title", "image", "price", "rating", "location"].map((field) => (
          <input
            key={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        ))}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Add Service
        </button>
      </form>

      {/* Right: Preview */}
      {submittedData && (
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Added Service Preview</h3>
          <img src={submittedData.image} alt={submittedData.title} className="w-full h-48 object-cover rounded mb-4" />
          <p><strong>Title:</strong> {submittedData.title}</p>
          <p><strong>Category:</strong> {submittedData.category}</p>
          <p><strong>Price:</strong> ৳{submittedData.price}</p>
          <p><strong>Rating:</strong> {submittedData.rating}</p>
          <p><strong>Location:</strong> {submittedData.location}</p>
        </div>
      )}
    </div>
    </div>
  );
}
