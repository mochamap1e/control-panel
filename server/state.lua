local state = {
    time = {0, 0, 0},
    weather = "CLEAR"
}

local lastState = json.encode(state)

function sendState(targetPlayer)
    TriggerClientEvent("sendState", targetPlayer, state)
end

RegisterNetEvent("requestState", function()
    sendState(source)
end)

Citizen.CreateThread(function()
    while true do
        local currentState = json.encode(state)

        if currentState ~= lastState then
            sendState(-1)
            lastState = currentState
        end
        
        Citizen.Wait(100)
    end
end)