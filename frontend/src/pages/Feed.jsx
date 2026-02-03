import { useEffect, useState } from "react";
import API from "../services/api";
import { Container, Row, Col } from "react-bootstrap";
import PostCard from "../components/PostCard";
const username = localStorage.getItem("username");


const Feed = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const res = await API.get("/posts");
        setPosts(res.data);
    };

    useEffect(() => {
        fetchPosts();
        
    }, []);
    

    

    return (
        <Container className="pb-5">
            <div className="mb-4">
                <h4 className="fw-semibold">
                    Hi, {username} <span>👋</span>
                </h4>
                <small className="text-muted">
                    Welcome back, here’s what’s new today
                </small>
            </div>

            <Row>
                {posts.map((post) => (
                    <Col
                        key={post._id}
                        xs={12}
                        md={6}
                        lg={4}
                        className="mb-4"
                    >
                        <PostCard post={post} refresh={fetchPosts} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Feed;
