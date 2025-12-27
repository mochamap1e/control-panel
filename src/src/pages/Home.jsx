import { Link } from "react-router-dom";

import Page from "../components/Page";

export default function Home() {
    return <Page text="home">
        <Link to="/environment"><button>Environment settings</button></Link>
    </Page>
}