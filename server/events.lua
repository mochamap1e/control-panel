local shared = json.decode(LoadResourceFile(GetCurrentResourceName(), "shared.json"))

local truthyWeather = {}
for _, weather in ipairs(shared.weatherTypes) do
    truthyWeather[weather] = true
end

RegisterNetEvent("setWantedLevel", function(level)
    if not level then return end
    SetPlayerWantedLevel(source, math.max(0, math.min(tonumber(level) or 0, 5)), false)
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