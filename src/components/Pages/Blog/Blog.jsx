import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import axios from "axios";
import { FaHome } from "react-icons/fa";
import { data, Link, useNavigate } from "react-router-dom";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: "", email: "", content: "" });
  const [loading, setLoading] = useState(false);
  const [posting, setPosting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://home-service-backend-2.vercel.app/blog/posts/")
      .then((response) => {
        const postData = response.data;
        setPosts(postData);
        if (postData.length > 0) {
          setPostId(postData[0].id);
        }
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  useEffect(() => {
    if (postId) {
      fetchComments(postId);
    }
  }, [postId]);

  const fetchComments = (id) => {
    setLoading(true);
    axios.get(`https://home-service-backend-2.vercel.app/blog/posts/${id}/comments/`)
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.error("Error fetching comments:", error);
      })
      .finally(() => setLoading(false));
  };

  const handlePostComment = () => {
    if (!newComment.name.trim() || !newComment.email.trim() || !newComment.content.trim()) return;
    setPosting(true);
    axios.post(`https://home-service-backend-2.vercel.app/blog/posts/${postId}/comments/`, {
      post: postId,
      name: newComment.name,
      email: newComment.email,
      content: newComment.content
    })
      .then(response => {
        setComments([response.data, ...comments]);
        setNewComment({ name: "", email: "", content: "" });
      })
      .catch(error => {
        console.error("Error posting comment:", error);
      })
      .finally(() => setPosting(false));
  };

  return (
<div className="pt-18">
  <div className="bg-white min-h-screen p-4 md:p-6">
    <div className="text-center mb-6 pt-10">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-500">Blog</h2>
      <div className="flex justify-center items-center text-pink-600 mt-1 text-sm">
        <FaHome onClick={() => navigate('/')} className="mr-2 cursor-pointer" />
        <span className="text-gray-500">&gt; It is a long established fact that a reader will be</span>
      </div>
    </div>

    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Blog Posts */}
      <div className="md:col-span-3">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 sm:p-6 mb-6 border border-pink-400 rounded-2xl">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">{post.title}</h2>
            <p className="font-bold text-purple-500 text-sm">Category: {post.category}</p>
            <img src={post.image_url} alt={post.title} className="w-full h-48 sm:h-64 object-cover rounded-lg my-4" />
            <p className="text-gray-700 text-sm leading-relaxed">{post.content.slice(0, 7000)}...</p>
            <p className="text-gray-500 text-xs mt-2">Created At: {new Date(post.created_at).toLocaleDateString()}</p>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <aside className="md:col-span-1 md:sticky top-24 h-fit">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            Blog Categories
          </h3>
          <ul className="text-pink-700 font-bold text-sm space-y-1 mb-4">
            <li>Car Wash</li>
            <li>Electrical</li>
            <li>Interior</li>
          </ul>

          <div className="space-y-3">
            {/* Sidebar Cards */}
            {[{
              title: "Car Wash",
              desc: "Keep your car shiny clean.",
              img: "https://img.freepik.com/free-photo/man-washing-his-car-garage_1157-26046.jpg"
            }, {
              title: "Electrical",
              desc: "Safe and smart wiring.",
              img: "https://img.freepik.com/free-photo/portrait-positive-male-with-drilling-machine-tool-belt-his-female-colleague-holding-hardhat-having-delightful-expression_273609-7933.jpg"
            }, {
              title: "Interior Design",
              desc: "Make your space cozy.",
              img: "https://img.freepik.com/free-photo/medium-shot-woman-cleaning-home_23-2150453302.jpg"
            }, {
              title: "Maintenance",
              desc: "Reliable routine checks.",
              img: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a"
            }].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 border border-gray-200 p-2 rounded-lg shadow-sm">
                <img src={item.img} alt={item.title} className="w-16 h-16 object-cover rounded" />
                <div>
                  <p className="font-semibold text-sm text-gray-800">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>

    {/* Comment Section */}
    <div className="max-w-2xl mx-auto mt-10 p-4 sm:p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-center text-purple-500 mb-3">Our Users Reviews</h2>
      <h2 className="text-xl font-semibold mb-3 text-pink-500">Comments</h2>

      <div className="mb-4 space-y-3">
        <input
          type="text"
          value={newComment.name}
          onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
          placeholder="Your Name"
          className="w-full border border-pink-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          value={newComment.email}
          onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
          placeholder="Your Email"
          className="w-full border border-pink-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          value={newComment.content}
          onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
          placeholder="Write a comment..."
          className="w-full border border-pink-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={handlePostComment}
          disabled={posting}
          className="mt-2 w-full bg-purple-500 text-white p-2 rounded-lg flex items-center justify-center gap-2 hover:bg-pink-500 transition">
          {posting && <Loader2 className="w-4 h-4 animate-spin" />}
          Post Comment
        </button>
      </div>

      {loading && <p className="text-center text-gray-500">Loading comments...</p>}

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="p-3 border border-gray-200 rounded-lg shadow-sm">
            <p className="text-sm font-semibold text-gray-700">{comment.name} ({comment.email})</p>
            <p className="text-pink-600">{comment.content}</p>
            <p className="text-xs text-gray-400">{new Date(comment.created_at).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>




  );
};

export default BlogPage;
