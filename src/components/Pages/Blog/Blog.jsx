import React, { useEffect, useState } from "react";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/blog/posts/")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="pt-18">
      <div className="bg-gray-100 min-h-screen p-6">
        {/* Header */}
        <header className="text-center py-4">
          <h1 className="text-3xl font-bold">Blog</h1>
          <p className="text-gray-600 text-sm">
            It is a long established fact that a reader will be
          </p>
        </header>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2">
          {/* Main Content */}
          <div className="md:col-span-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white p-6 rounded-lg shadow-md mb-6"
              >
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-500 text-sm">
                  Category: {post.category}
                </p>
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded-lg my-4"
                />
                <p className="text-gray-700 text-sm leading-relaxed">
                  {post.content.slice(0, 7000)}...
                </p>
                <p className="text-gray-500 text-xs">
                  Created At: {new Date(post.created_at).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>

          {/* Static Sidebar */}
          <aside className="fixed-sidebar">
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
              <h3 className="font-bold text-lg mb-2">Blog Categories</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>Car Wash</li>
                <li>Electrical</li>
                <li>Interior</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Latest News</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li className="flex items-center space-x-2">
                  <img
                    src="https://img.freepik.com/free-photo/technician-checking-heating-system-boiler-room_169016-53010.jpg?ga=GA1.1.1673100480.1739595697&semt=ais_hybrid"
                    alt="News 1"
                    className="w-10 h-10 object-cover "
                  />
                  <span>January 1, 2023 - The standard chunk of lorem Ipsum used reasonable.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="News 2"
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <span>January 1, 2023 - It is a long established fact that a reader will be</span>
                </li>
                <li className="flex items-center space-x-2">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="News 3"
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <span>January 1, 2023 - To generate lorem ipsum which looks reasonable.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="News 4"
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <span>January 1, 2023 - Velit esse quam nihil molestiae consequatur.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
