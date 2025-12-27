import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

import shared from "../utils/sharedJson";

export default function Environment() {
    const state = window.STATE;

    const [timeFrozen, setTimeFrozen] = useState(state.timeFrozen);
    const [hour, setHour] = useState(state.time[0]);
    const [minute, setMinute] = useState(state.time[1]);
    const [second, setSecond] = useState(state.time[2]);
    const [weather, setWeather] = useState(state.weather);

    return (
        <div>
            <h1>Environment</h1>

            <div>
                <label>time frozen </label>
                <input type="checkbox" checked={timeFrozen} onChange={(e) => {
                    const checked = e.target.checked;
                    setTimeFrozen(checked);
                    axios.post("/setTimeFrozen", { frozen: checked });
                }} />
            </div>

            <div>
                <label>hour </label>
                <input type="number" value={hour} onChange={(e) => setHour(e.target.value)}/>
            </div>
            
            <div>
                <label>minute </label>
                <input type="number" value={minute} onChange={(e) => setMinute(e.target.value)}/>
            </div>
            
            <div>
                <label>second </label>
                <input type="number" value={second} onChange={(e) => setSecond(e.target.value)}/>
            </div>
            
            <button onClick={() => {
                axios.post("/setTime", { hour: hour, minute: minute, second: second });
            }}>set time</button>

            <div>
                <label>weather </label>
                <select value={weather} onChange={(e) => {
                    const choice = e.target.value;
                    setWeather(choice);
                    axios.post("/setWeather", { weather: choice });
                }}>
                    {shared.weatherTypes.map((weather) => (
                        <option key={weather} value={weather}>{weather}</option>
                    ))}
                </select>
            </div>

            <Link to="/"><button>back</button></Link>
        </div>
    )
}