State = {
    server = {},
    client = {}
}

RegisterNetEvent("sendState", function(newState)
    State.server = newState

    NetworkOverrideClockTime(State.server.time[1], State.server.time[2], State.server.time[3])
    SetWeatherTypeNowPersist(State.server.weather)
end)

AddEventHandler("playerSpawned", function()
    TriggerServerEvent("requestState")
    PauseClock(true)
end)