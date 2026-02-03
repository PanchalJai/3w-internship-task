import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import CommentBox from "./CommentBox";
import API from "../services/api";

const PostCard = ({ post, refresh }) => {
    const [showComments, setShowComments] = useState(false);
    const [liking, setLiking] = useState(false);

    const likePost = async () => {
        try {
            setLiking(true);
            await API.put(`/posts/like/${post._id}`);
            refresh();
        } catch (error) {
            console.error("Like failed", error);
        } finally {
            setLiking(false);
        }
    };

    return (
        <Card className="h-100 shadow-sm">
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                    @{post.username}
                </Card.Subtitle>

                <Card.Text>{post.text}</Card.Text>

                {post.image && (
                    <img
                        src={post.image}
                        alt="post"
                        style={{ maxHeight: "220px", objectFit: "cover", width: "100%" }}
                        className="mb-3"
                    />
                )}

                <div className="d-flex justify-content-between">
                    <Button
                        size="sm"
                        variant="outline-danger"
                        onClick={likePost}
                        disabled={liking}
                    >
                        ❤️ {post.likes.length}
                    </Button>

                    <Button
                        size="sm"
                        variant="outline-secondary"
                        onClick={() => setShowComments(!showComments)}
                    >
                        💬 {post.comments.length}
                    </Button>
                </div>

                {showComments && (
                    <CommentBox post={post} refresh={refresh} />
                )}
            </Card.Body>
        </Card>
    );
};

export default PostCard;
