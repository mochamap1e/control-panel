import axios from "axios";
import { useState, useEffect } from "react";

import App from "./App";
import { isFiveM } from "./utils/isFiveM";

export default function Renderer() {
    const [visible, setVisible] = useState(!isFiveM);

    useEffect(() => {
        function listener(event) {
            const message = event.data.message;

            if (!message) { return; }

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

    if (!visible) return null;

    return (
        <div id="container">
            <button id="close-btn" onClick={() => axios.post("/toggle")}>X</button>
            <App/>
        </div>
    )
}