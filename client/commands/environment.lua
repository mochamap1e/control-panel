RegisterNetEvent("sendState", function(newState)
    State.server = newState
end)

-- NetworkOverrideClockTime(State.server.time[1], State.server.time[2], State.server.time[3])
    -- SetWeatherTypeNowPersist(State.server.weather)