import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import CreatePost from "./pages/CreatePost";
import AppNavbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
