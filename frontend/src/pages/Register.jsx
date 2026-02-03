// src/pages/Register.jsx
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
        e.preventDefault(); // Prevent GET request / page reload

        try {
            const res = await API.post("/auth/register", { username, email, password });
            console.log(res.data);
            alert("Registration successful!");
            navigate("/"); // Redirect after success
        } catch (err) {
            console.error(err.response?.data || err.message);
            alert(err.response?.data?.error || "Registration failed");
        }
    };

    return (
        <Container className="mt-5" style={{ maxWidth: "420px" }}>
            <h3>Register</h3>
            <Form onSubmit={submitHandler}>
                <Form.Control
                    placeholder="Username"
                    className="mb-2"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <Form.Control
                    type="email"
                    placeholder="Email"
                    className="mb-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Form.Control
                    type="password"
                    placeholder="Password"
                    className="mb-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button type="submit">Register</Button>
            </Form>
        </Container>
    );
};

export default Register;
