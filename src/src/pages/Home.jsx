import { Link } from "react-router-dom";

export default function Home() {
    return <div>
        <h1>Control Panel</h1>
        <Link to="/environment"><button>environment</button></Link>
    </div>
}