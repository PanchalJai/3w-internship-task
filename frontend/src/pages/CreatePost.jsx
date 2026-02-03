import { useState } from "react";
import API from "../services/api";
import { Button, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const [text, setText] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        await API.post("/posts", { text, image });
        navigate("/feed");
    };

    return (
        <Container className="mt-5" style={{ maxWidth: "420px" }}>
            <div className="shadow-sm p-4 bg-white rounded">
            <h3>Create Post</h3>
            <Form onSubmit={submitHandler}>
                <Form.Control
                    placeholder="Text"
                    className="mb-2"
                    onChange={(e) => setText(e.target.value)}
                />
                <Form.Control
                    placeholder="Image URL"
                    className="mb-2"
                    onChange={(e) => setImage(e.target.value)}
                />
                <Button type="submit">Post</Button>
            </Form>
            </div>
        </Container>
    );
};

export default CreatePost;
