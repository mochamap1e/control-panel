import axios from "axios";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { isFiveM } from "./utils/isFiveM";

import App from "./App";

if (isFiveM) axios.defaults.baseURL = `https://${GetParentResourceName()}/`;

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App/>
    </StrictMode>
);