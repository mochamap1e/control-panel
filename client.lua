---------- TOGGLING ----------

local isMenuOpen = false

function toggleMenu()
    isMenuOpen = not isMenuOpen

    SetNuiFocus(isMenuOpen, isMenuOpen)

    local message

    if isMenuOpen then
        message = "open"
    else
        message = "close"
    end

    SendNuiMessage(json.encode({ message = message }))
end

RegisterCommand("toggleMenu", toggleMenu)
RegisterKeyMapping("toggleMenu", "Toggles the mod menu.", "keyboard", "F4")

---------- CALLBACKS ----------

RegisterNuiCallback("toggle", function (_, cb)
    toggleMenu()
    cb({})
end)

for _, relay in pairs({
    "setTimeFrozen",
    "setTime",
    "setWeather"
}) do
    RegisterNuiCallback(relay, function (data, cb)
        TriggerServerEvent(relay, data)
        cb({})
    end)
end

---------- SYNCING ----------

RegisterNetEvent("syncState", function(state)
    PauseClock(state.timeFrozen)
    NetworkOverrideClockTime(state.time[1], state.time[2], state.time[3])
    SetWeatherTypeNowPersist(state.weather)
    print("Weather: " .. state.weather)
end)