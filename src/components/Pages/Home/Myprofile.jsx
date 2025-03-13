import React, { useState, useEffect } from "react";
import axios from "axios";

const EditProfile = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
  });

  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/user/profile/", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (authToken) {
      fetchUserData();
    }
  }, [authToken]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://127.0.0.1:8000/user/profile/", userData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      console.log(userData);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="pt-18">
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white shadow-md rounded-lg max-w-4xl w-full flex flex-col md:flex-row">
          {/* Left Panel */}
          <div className="bg-pink-500 text-white p-6 flex flex-col items-center md:w-1/3">
            <img
              src="https://i.pravatar.cc/150"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white mb-4"
            />
            <p className="text-lg font-semibold">Username: {userData.username}</p>
            <p className="text-sm">First Name: {userData.first_name}</p>
            <p className="text-sm">Last Name: {userData.last_name}</p>
            <p className="text-sm">Email: {userData.email}</p>
            <p className="text-sm">Phone: {userData.phone || "N/A"}</p>
            <button className="mt-4 px-4 py-2 bg-white text-pink-500 font-semibold rounded-md shadow hover:bg-gray-200">
              Change Password
            </button>
          </div>

          {/* Right Panel - Edit Form */}
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-semibold text-center mb-4">Edit Profile</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  name="username"
                  value={userData.username}
                  onChange={handleChange}
                  className="w-full p-2 border-2 border-red-500 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  className="w-full p-2 border-2 border-red-500 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  value={userData.first_name}
                  onChange={handleChange}
                  className="w-full p-2 border-2 border-red-500 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  value={userData.last_name}
                  onChange={handleChange}
                  className="w-full p-2 border-2 border-red-500 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={userData.phone || ""}
                  onChange={handleChange}
                  className="w-full p-2 border-2 border-red-500 rounded-md"
                />
              </div>
              <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
