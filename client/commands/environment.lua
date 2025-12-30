RegisterNetEvent("sendState", function()
    SetWeatherTypeNowPersist(State.server.weather)
end)

-- tick

Citizen.CreateThread(function()
    while true do
        PauseClock(true)
        NetworkOverrideClockTime(State.server.time[1], State.server.time[2], State.server.time[3])
        
        Citizen.Wait(0)
    end
end)