State = {}

local lastState = json.encode(State)

function sendState(targetPlayer)
    TriggerClientEvent("sendState", targetPlayer, State)
end

RegisterNetEvent("requestState", function()
    sendState(source)
end)

Citizen.CreateThread(function()
    while true do
        local currentState = json.encode(State)

        if currentState ~= lastState then
            sendState(-1)
            lastState = currentState
        end
        
        Citizen.Wait(100)
    end
end)