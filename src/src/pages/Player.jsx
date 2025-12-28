import axios from "axios";

import Button from "../components/Button";
import Toggle from "../components/Toggle";

import { isFiveM } from "../utils/isFiveM";

if (!isFiveM) window.CLIENTSTATE = {}

export default function Player() {
    return (
        <div className="page">
            <h1>Player</h1>

            <h2>Stats</h2>
            <Toggle
                value={window.CLIENTSTATE.invincible}
                onToggle={(toggled) =>
                axios.post("setInvincible", { value: toggled })
            }>Invincibility</Toggle>
            <Toggle
                value={window.CLIENTSTATE.infiniteStamina}
                onToggle={(toggled) =>
                axios.post("setInfiniteStamina", { value: toggled })
            }>Infinite stamina</Toggle>

            <h2>Wanted Level</h2>
            <div id="wanted-levels-container">
                {Array.from({ length: 6 }, (_, i) => i).map((level) => (
                    <Button
                        key={level}
                        onClick={() => axios.post("setWantedLevel", { level: level })}
                    >{level}</Button>
                ))}
            </div>
            <Toggle
                value={window.CLIENTSTATE.neverWanted}
                onToggle={(toggled) =>
                axios.post("setNeverWanted", { value: toggled })
            }>Never wanted</Toggle>
        </div>
    )
}