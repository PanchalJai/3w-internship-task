import { useState } from "react";
import API from "../services/api";
import { Button, Form } from "react-bootstrap";

const CommentBox = ({ post, refresh }) => {
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);

    const submitComment = async () => {
        if (!text.trim()) return;

        setLoading(true);
        await API.post(`/posts/comment/${post._id}`, { text });
        setText("");
        setLoading(false);
        refresh();
    };

    return (
        
        <div className="mt-3">
            
            {/* Existing comments */}
            {post.comments.map((comment, index) => (
                <div key={index} className="mb-2">
                    <strong>@{comment.username}</strong>
                    <div className="text-muted small">{comment.text}</div>
                </div>
            ))}

            {/* Add new comment */}
            <Form.Control
                placeholder="Write a comment..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="mb-2"
            />

            <Button
                size="sm"
                onClick={submitComment}
                disabled={loading}
            >
                {loading ? "Posting..." : "Post"}
            </Button>
        </div>
    );
};

export default CommentBox;
