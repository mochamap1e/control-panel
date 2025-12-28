import axios from "axios";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import Renderer from "./Renderer";
import { isFiveM } from "./utils/isFiveM";

if (isFiveM) axios.defaults.baseURL = `https://${GetParentResourceName()}/`;

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HashRouter>
            <Renderer/>
        </HashRouter>
    </StrictMode>
)