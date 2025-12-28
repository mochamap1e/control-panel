import axios from "axios";
import { useState } from "react";

import Page from "../components/Page";
import Checkbox from "../components/Checkbox";

export default function Player() {
    const clientState = window.CLIENTSTATE || {
        invincible: false,
        neverWanted: false
    };

    const [invincible, setInvincible] = useState(clientState.invincible);
    const [infiniteStamina, setInfiniteStamina] = useState(clientState.invincible);
    const [neverWanted, setNeverWanted] = useState(clientState.neverWanted);

    return (
        <Page title="Player">
            <h2>Stats</h2>

            <Checkbox label="Invincible" checked={invincible} onChange={(e) => {
                const checked = e.target.checked;
                setInvincible(checked);
                axios.post("setInvincible", { value: checked });
            }}/>
            <Checkbox label="Infinite stamina" checked={infiniteStamina} onChange={(e) => {
                const checked = e.target.checked;
                setInfiniteStamina(checked);
                axios.post("setInfiniteStamina", { value: checked });
            }}/>

            <h2>Wanted Level</h2>

            <div id="wanted-buttons">
                {Array.from({ length: 6 }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => axios.post("setWantedLevel", { level: i }) }
                    >{i}</button>
                ))}
            </div>
            <button onClick={() => axios.post("clearWantedLevel")}>Clear wanted level</button>
            <Checkbox label="Never wanted" checked={neverWanted} onChange={(e) => {
                const checked = e.target.checked;
                setNeverWanted(checked);
                axios.post("setInfiniteStamina", { value: checked });
            }}/>
        </Page>
    )
}