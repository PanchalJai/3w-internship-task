// src/pages/Login.jsx
import { useState } from "react";
import API from "../services/api";
import { Button, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault(); // Prevent GET request / page reload

        try {
            const res = await API.post("/auth/login", { email, password });
            console.log(res.data);
            localStorage.setItem("token", res.data.token); // Save JWT token
            alert("Login successful!");
            navigate("/dashboard"); // Redirect after login
        } catch (err) {
            console.error(err.response?.data || err.message);
            alert(err.response?.data?.error || "Login failed");
        }
    };

    return (
        <Container className="mt-5" style={{ maxWidth: "420px" }}>
            <h3>Login</h3>
            <Form onSubmit={submitHandler}>
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
                <Button type="submit">Login</Button>
            </Form>
        </Container>
    );
};

export default Login;
