RegisterNetEvent("setTime", function(time)
    State.time = {time.hour, time.minute, time.second}
end)