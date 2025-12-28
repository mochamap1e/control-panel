import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Player from "./pages/Player";
import Weapons from "./pages/Weapons";
import Environment from "./pages/Environment";

import "./style.css";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/player" element={<Player />} />
            <Route path="/weapons" element={<Weapons />} />
            <Route path="/environment" element={<Environment />} />
        </Routes>
    )
}