import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AppNavbar = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    const logout = () => {
        localStorage.clear();
        navigate("/");
        window.location.reload();
    };

    return (
        <Navbar bg="white" expand="lg" className="shadow-sm mb-4">
            <Container>
                <Navbar.Brand className="fw-bold text-dark">
                    SocialBoard
                </Navbar.Brand>

                <Nav className="ms-auto">
                    {!isLoggedIn && (
                        <>
                            <Link className="nav-link text-dark" to="/">
                                Login
                            </Link>
                            <Link className="nav-link text-dark" to="/register">
                                Register
                            </Link>
                        </>
                    )}

                    {isLoggedIn && (
                        <>
                            <Link className="nav-link text-dark" to="/feed">
                                Feed
                            </Link>
                            <Link className="nav-link text-dark" to="/create">
                                Create
                            </Link>
                            <Nav.Link onClick={logout} className="text-danger">
                                Logout
                            </Nav.Link>
                        </>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;
