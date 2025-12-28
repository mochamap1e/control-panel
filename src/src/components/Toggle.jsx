import { useState } from "react";

import Button from "./Button";

export default function Toggle({ value, onToggle, children }) {
    const [toggled, setToggled] = useState(value);

    return (
        <Button onClick={() => {
            const newState = !toggled;
            setToggled(newState);
            onToggle(newState);
        }}>{children}: {toggled ? "on" : "off"}</Button>
    )
}