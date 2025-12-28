import axios from "axios";

import Button from "../components/Button";

export default function Weapons() {
    return (
        <div class="page">
            <h1>Weapons</h1>
            <Button onClick={() => axios.post("getAllWeapons")}>Get all weapons</Button>
            <Button onClick={() => axios.post("getMaxAmmo")}>Get max ammo</Button>
        </div>
    )
}