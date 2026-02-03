import { useState } from "react";
import API from "../services/api";
import { Button, Form, Container, Alert, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const [text, setText] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault(); // prevent GET request
        setLoading(true);
        setError("");

        try {
            const res = await API.post("/posts", { text, image });
            console.log(res.data);
            navigate("/feed"); // redirect to feed
        } catch (err) {
            console.error(err.response?.data || err.message);
            setError(err.response?.data?.error || "Failed to create post");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="mt-5" style={{ maxWidth: "420px" }}>
            <div className="shadow-sm p-4 bg-white rounded">
                <h3>Create Post</h3>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={submitHandler}>
                    <Form.Control
                        placeholder="Text"
                        className="mb-2"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                    />
                    <Form.Control
                        placeholder="Image URL"
                        className="mb-2"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    <Button type="submit" disabled={loading}>
                        {loading ? <Spinner animation="border" size="sm" /> : "Post"}
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default CreatePost;
