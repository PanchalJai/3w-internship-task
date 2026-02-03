import { useState } from "react";
import API from "../services/api";
import { Button, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        await API.post("/auth/register", { username, email, password });
        navigate("/");
    };

    return (
        <Container className="mt-5" style={{ maxWidth: "420px" }}>
            
            <h3>Register</h3>
            <Form onSubmit={submitHandler}>
                <Form.Control placeholder="Username" className="mb-2"
                    onChange={(e) => setUsername(e.target.value)} />
                <Form.Control placeholder="Email" className="mb-2"
                    onChange={(e) => setEmail(e.target.value)} />
                <Form.Control type="password" placeholder="Password" className="mb-2"
                    onChange={(e) => setPassword(e.target.value)} />
                <Button type="submit">Register</Button>
            </Form>
        </Container>
    );
};

export default Register;
