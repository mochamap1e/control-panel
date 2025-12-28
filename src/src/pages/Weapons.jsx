import axios from "axios";

import Button from "../components/Button";

export default function Weapons() {
    return (
        <div className="page">
            <h1>Weapons</h1>

            <h2>Inventory</h2>
            <Button onClick={() => axios.post("getAllWeapons")}>Get all weapons</Button>
            <Button onClick={() => axios.post("getMaxAmmo")}>Get max ammo</Button>

            <h2>Modifiers</h2>
        </div>
    )
}