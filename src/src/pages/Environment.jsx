import axios from "axios";
import { useState } from "react";

import Page from "../components/Page";
import Checkbox from "../components/Checkbox"
import Dropdown from "../components/Dropdown";
import InputBox from "../components/InputBox";

import shared from "../utils/sharedJson";

export default function Environment() {
    const state = window.STATE || {
        time: [0, 0, 0],
        weather: "CLEAR"
    };

    const [hour, setHour] = useState(state.time[0]);
    const [minute, setMinute] = useState(state.time[1]);
    const [second, setSecond] = useState(state.time[2]);
    const [weather, setWeather] = useState(state.weather);

    return (
        <Page title="Environment">
            <InputBox
                label="Hour"
                type="number"
                value={hour}
                setter={setHour}
            />

            <InputBox
                label="Minute"
                type="number"
                value={minute}
                setter={setMinute}
            />

            <InputBox
                label="Second"
                type="number"
                value={second}
                setter={setSecond}
            />

            <button onClick={() => {
                axios.post("/setTime", { hour: hour, minute: minute, second: second });
            }}>Set Time</button>

            <Dropdown label="Weather" value={weather} onChange={(e) => {
                const choice = e.target.value;
                setWeather(choice);
                axios.post("/setWeather", { weather: choice });
            }}>
                {shared.weatherTypes.map((weather) => (
                    <option key={weather} value={weather}>{weather}</option>
                ))}
            </Dropdown>
        </Page>
    )
}