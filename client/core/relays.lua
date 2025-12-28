for _, relay in pairs({
    "setTime"
}) do
    RegisterNuiCallback(relay, function(data, cb)
        TriggerServerEvent(relay, data)
        cb({})
    end)
end