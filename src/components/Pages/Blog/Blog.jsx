import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import axios from "axios";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: "", email: "", content: "" });
  const [loading, setLoading] = useState(false);
  const [posting, setPosting] = useState(false);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/blog/posts/")
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
    axios.get(`http://127.0.0.1:8000/blog/posts/${id}/comments/`)
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
    axios.post(`http://127.0.0.1:8000/blog/posts/${postId}/comments/`, {
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
      <div className="bg-white min-h-screen p-6">
        <header className="text-center py-4">
          <h1 className="text-3xl font-bold text-pink-500">Blog</h1>
          <p className="text-gray-600 text-sm">It is a long established fact that a reader will be</p>
        </header>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2">
          <div className="md:col-span-3 ">
            {posts.map((post) => (
              <div key={post.id} className="bg-white p-6 mb-6 border border-pink-400 rounded-2xl">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="font-bold text-purple-500 text-sm">Category: {post.category}</p>
                <img src={post.image_url} alt={post.title} className="w-full h-64 object-cover rounded-lg my-4" />
                <p className="text-gray-700 text-sm leading-relaxed">{post.content.slice(0, 7000)}...</p>
                <p className="text-gray-500 text-xs">Created At: {new Date(post.created_at).toLocaleDateString()}</p>
              </div>
            ))}
          </div>

          <aside className="fixed-sidebar">
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
              <h3 className="font-bold text-lg mb-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
                Blog Categories
              </h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>Car Wash</li>
                <li>Electrical</li>
                <li>Interior</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Comment Section */}
      <div className="max-w-2xl ml-12 p-6 bg-white rounded-xl shadow-md">

        <h2 className="text-2xl font-semibold text-center text-purple-500 mb-3">Our  Users Reviews</h2>
        <h2 className="text-xl font-semibold mb-3 text-pink-500">Comments</h2>
        <div className="mb-4 space-y-2">
          <input
            type="text"
            value={newComment.name}
            onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
            placeholder="Your Name"
            className="w-full border border-pink-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            value={newComment.email}
            onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
            placeholder="Your Email"
            className="w-full border border-pink-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            value={newComment.content}
            onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
            placeholder="Write a comment..."
            className="w-full border border-pink-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
  );
};

export default BlogPage;
