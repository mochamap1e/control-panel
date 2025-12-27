import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

import Page from "../components/Page";

import shared from "../utils/sharedJson";

export default function Environment() {
    const [timeFrozen, setTimeFrozen] = useState(false);
    const [hour, setHour] = useState("0");
    const [minute, setMinute] = useState("0");
    const [second, setSecond] = useState("0");
    const [weather, setWeather] = useState("CLEAR");

    return <Page text="environment settings">
        <div>
            <label>time frozen </label>
            <input type="checkbox" value={timeFrozen} onChange={(e) => {
                setTimeFrozen(e.target.checked);
                axios.post("/setTimeFrozen", { frozen: timeFrozen });
            }} /><br/><br/>

            <label>hour </label>
            <input type="number" value={hour} onChange={(e) => setHour(e.target.value)}/><br/>

            <label>minute </label>
            <input type="number" value={minute} onChange={(e) => setMinute(e.target.value)}/><br/>

            <label>second </label>
            <input type="number" value={second} onChange={(e) => setSecond(e.target.value)}/><br/>

            <button onClick={() => {
                axios.post("/setTime", { hour: hour, minute: minute, second: second });
            }}>set time</button><br/><br/>

            <label>weather </label>
            <select onChange={(e) => {
                axios.post("/setWeather", { weather: e.target.value })
            }}>
                {shared.weatherTypes.map((weather) => (
                    <option key={weather} value={weather}>{weather}</option>
                ))}
            </select>
        </div>

        <Link to="/"><button>Home</button></Link>
    </Page>
}