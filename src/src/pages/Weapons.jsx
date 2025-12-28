import axios from "axios";

import Page from "../components/Page";

export default function Weapons() {
    return (
        <Page title="Weapons">
            <h2>Inventory</h2>
            <button onClick={() => axios.post("getAllWeapons")}>Get all weapons</button>

            <h2>Ammo</h2>
            <button onClick={() => axios.post("getMaxAmmo")}>Get max ammo</button>
        </Page>
    )
}