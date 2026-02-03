import { useState } from "react";
import API from "../services/api";
import { Button, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const res = await API.post("/auth/login", { email, password });
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.user.username);
        
        window.location.href = "/feed";
    };

    return (
        <Container className="mt-5" style={{ maxWidth: "420px" }}>
            <div className="shadow-sm p-4 bg-white rounded">
            <h4 className="mb-3 text-center">Welcome Back</h4>
            <Form onSubmit={submitHandler}>
                <Form.Control
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-2"
                />
                <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-2"
                />
                <Button type="submit">Login</Button>
            </Form>
            <p className="mt-3">
                New user?{" "}
                <span
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => navigate("/register")}
                >
                    Register here
                </span>
            </p>
            </div>
        </Container>
    );
};

export default Login;
