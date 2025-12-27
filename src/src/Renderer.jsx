import axios from "axios";
import { useState, useEffect } from "react";

import App from "./App";
import { isFiveM } from "./utils/isFiveM";

export default function Renderer() {
    const [visible, setVisible] = useState(!isFiveM);

    useEffect(() => {
        function listener(event) {
            const message = event.data.message;
            const state = event.data.state;

            if (!message || !state) { return; }

            window.STATE = state;

            switch(message) {
                case "open":
                    setVisible(true); break;
                case "close":
                    setVisible(false); break;
                default:
                    return;
            }
        }

        window.addEventListener("message", listener);
        return () => window.removeEventListener("message", listener);
    }, []);

    useEffect(() => {
        function listener(e) { if (e.key === "F4") axios.post("/toggle"); }
        window.addEventListener("keydown", listener)
        return () => window.removeEventListener("keydown", listener);
    }, []);

    if (!visible) return null;

    return (
        <div id="container">
            <App/>
        </div>
    )
}