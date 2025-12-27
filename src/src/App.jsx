import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Environment from "./pages/Environment";

import "./style.css";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/environment" element={<Environment />} />
        </Routes>
    )
}