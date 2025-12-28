import axios from "axios";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

import { isFiveM } from "./utils/isFiveM";

import Button from "./components/Button";
import Player from "./pages/Player";
import Weapons from "./pages/Weapons";
import Vehicles from "./pages/Vehicles";
import Environment from "./pages/Environment";

import "./style.css";

const pages = {
    "Player": {
        icon: "player.svg",
        element: <Player/>
    },
    "Weapons": {
        icon: "weapons.svg",
        element: <Weapons/>
    },
    "Vehicles": {
        icon: "vehicles.svg",
        element: <Vehicles/>
    },
    "Environment": {
        icon: "environment.svg",
        element: <Environment/>
    }
};

export default function App() {
    const [visible, setVisible] = useState(!isFiveM);
    const [currentPage, setCurrentPage] = useState(Object.keys(pages)[0]);

    // SET GLOBALS
    useEffect(() => { 
        function listener(event) {
            setVisible(event.data.visible);
            window.SERVERSTATE = event.data.serverState;
            window.CLIENTSTATE = event.data.clientState;
            window.GAMEBUILD = event.data.gameBuild;
        }

        window.addEventListener("message", listener);
        return () => window.removeEventListener("message", listener);
    }, []);

    // CLOSE KEYBIND
    useEffect(() => {
        function listener(event) {
            if (event.key === window.SHARED.menuKey) axios.post("toggle");
        }

        window.addEventListener("keydown", listener);
        return () => window.removeEventListener("keydown", listener);
    }, []);

    const hiddenProps = { opacity: 0, y: 10 };
    const visibleProps = { opacity: 1, y: 0 };

    return (
        <>
            <AnimatePresence>
                {visible &&
                    <motion.div
                        id="container"
                        initial={hiddenProps}
                        exit={hiddenProps}
                        animate={visibleProps}
                        transition={{ duration: 0.25 }}
                    >
                        <div id="left-pane" className="page">
                            <h1>Control Panel</h1>
                            <div id="pages-container">
                                {Object.keys(pages).map((pageKey) => (
                                    <Button
                                        key={pageKey}
                                        icon={pages[pageKey].icon}
                                        onClick={() => setCurrentPage(pageKey)}
                                    >
                                        {pageKey}
                                    </Button>
                                ))}
                            </div>
                        </div>
                        <div id="right-pane">{pages[currentPage].element}</div>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}