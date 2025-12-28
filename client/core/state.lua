State = {
    server = {},
    client = {
        invincible = false,
        infiniteStamina = false,
        neverWanted = false
    }
}

RegisterNetEvent("sendState", function(newState)
    State.server = newState
end)

AddEventHandler("playerSpawned", function()
    TriggerServerEvent("requestState")
end)