import axios from "axios";

import Button from "../components/Button";

export default function Player() {
    return (
        <div className="page">
            <h1>Player</h1>

            <h2>Wanted Level</h2>
            <div id="wanted-levels-container">
                {Array.from({ length: 6 }, (_, i) => i).map((level) => (
                    <Button
                        key={level}
                        onClick={() => axios.post("setWantedLevel", { level: level })}
                    >{level}</Button>
                ))}
            </div>
        </div>
    )
}