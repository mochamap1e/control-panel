import axios from "axios";

import Page from "../components/Page";
import PageLink from "../components/PageLink";

export default function Home() {
    return (
        <Page title="Control Panel" isHome={true}>
            <PageLink to="environment">Environment</PageLink>
            <PageLink to="weapons">Weapons</PageLink>
            <button onClick={() => axios.post("/toggle")}>Close</button>
        </Page>
    )
}