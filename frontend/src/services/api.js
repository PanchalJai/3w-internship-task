// src/services/api.js
import axios from "axios";

// Use environment variable or fallback
const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "https://threew-internship-task.onrender.com/api"
});

// Attach token if exists
API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if (token) req.headers.Authorization = `Bearer ${token}`;
    return req;
});

export default API;
