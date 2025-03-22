import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import axios from "axios";

export default function CommentSection({ postId }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({ name: "", email: "", content: "" });
    const [loading, setLoading] = useState(false);
    const [posting, setPosting] = useState(false);

    useEffect(() => {
        if (postId) {
            fetchComments();
        }
    }, [postId]);

    const fetchComments = () => {
        setLoading(true);
        axios.get(`http://127.0.0.1:8000/blog/posts/${postId}/comments/`)
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
        <div className="max-w-2xl mx-auto p-4 bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-3">Comments</h2>
            
            {/* Comment Input */}
            <div className="mb-4 space-y-2">
                <input
                    type="text"
                    value={newComment.name}
                    onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    value={newComment.email}
                    onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
                    placeholder="Your Email"
                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    value={newComment.content}
                    onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                    placeholder="Write a comment..."
                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                    onClick={handlePostComment} 
                    disabled={posting} 
                    className="mt-2 w-full bg-purple-500 text-white p-2 rounded-lg flex items-center justify-center gap-2 hover:bg-pink-500 transition">
                    {posting && <Loader2 className="w-4 h-4 animate-spin" />} 
                    Post Comment
                </button>
            </div>

            {/* Loading State */}
            {loading && <p className="text-center text-gray-500">Loading comments...</p>}
            
            {/* Comment List */}
            <div className="space-y-4">
                {comments.map((comment) => (
                    <div key={comment.id} className="p-3 border border-gray-200 rounded-lg shadow-sm">
                        <p className="text-sm font-semibold text-gray-700">{comment.name} ({comment.email})</p>
                        <p className="text-gray-600">{comment.content}</p>
                        <p className="text-xs text-gray-400">{new Date(comment.created_at).toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
