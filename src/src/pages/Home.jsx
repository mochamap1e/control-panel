import axios from "axios";

import Page from "../components/Page";
import PageLink from "../components/PageLink";

export default function Home() {
    return (
        <Page title="Control Panel" isHome={true}>
            <h2>GTA V v{window.BUILD}</h2>

            <PageLink to="player">Player</PageLink>
            <PageLink to="weapons">Weapons</PageLink>
            <PageLink to="environment">Environment</PageLink>

            <button onClick={() => axios.post("toggle")}>Close</button>
        </Page>
    )
}