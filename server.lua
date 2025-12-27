---------- VARS ----------

local shared = json.decode(LoadResourceFile(GetCurrentResourceName(), "shared.json"))

local truthyWeather = {}
for _, weather in ipairs(shared.weatherTypes) do
    truthyWeather[weather] = true
end

---------- SYNCING ----------

local state = {
    timeFrozen = false,
    time = {0, 0, 0},
    weather = "CLEAR"
}

function sendState(targetPlayer)
    TriggerClientEvent("sendState", targetPlayer, state)
end

local lastState = json.encode(state)
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

---------- EVENTS ----------

RegisterNetEvent("requestState", function()
    sendState(source)
end)

RegisterNetEvent("setTimeFrozen", function(data)
    local newFrozen = data.frozen

    if type(newFrozen) ~= "boolean" then return end

    state.timeFrozen = newFrozen
end)

RegisterNetEvent("setTime", function(data)
    if not data then return end
    state.time = {
        math.max(0, math.min(tonumber(data.hour) or 0, 23)),
        math.max(0, math.min(tonumber(data.minute) or 0, 59)),
        math.max(0, math.min(tonumber(data.second) or 0, 59))
    }
end)

RegisterNetEvent("setWeather", function(data)
    local newWeather = data.weather

    if not newWeather then return end
    if not truthyWeather[newWeather] then return end

    state.weather = newWeather
end)