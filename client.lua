local shared = json.decode(LoadResourceFile(GetCurrentResourceName(), "shared.json"))

local key = shared.menuKey

---------- SYNCING ----------

local state

local function applyState()
    PauseClock(state.timeFrozen)
    NetworkOverrideClockTime(state.time[1], state.time[2], state.time[3])
    SetWeatherTypeNowPersist(state.weather)
end

RegisterNetEvent("sendState", function(newState)
    state = newState
    applyState()
end)

AddEventHandler("playerSpawned", function()
    TriggerServerEvent("requestState")
end)

---------- EVENTS ----------

local displayedInfo = false
AddEventHandler("playerSpawned", function()
    if not displayedInfo then
        displayedInfo = true
        
        BeginTextCommandThefeedPost("STRING")
        AddTextComponentSubstringPlayerName("Press " .. key .. " to open the control panel.")
        EndTextCommandThefeedPostTicker(true, true)
    end
end)

---------- CALLBACKS ----------

RegisterNuiCallback("toggle", function (_, cb)
    toggleMenu()
    cb({})
end)

for _, relay in pairs({
    "setTime",
    "setWeather"
}) do
    RegisterNuiCallback(relay, function (data, cb)
        TriggerServerEvent(relay, data)
        cb({})
    end)
end

---------- TOGGLING ----------

local isMenuOpen = false

function toggleMenu()
    isMenuOpen = not isMenuOpen

    SetNuiFocus(isMenuOpen, isMenuOpen)

    local message

    if isMenuOpen then
        message = "open"
    else
        message = "close"
    end

    SendNuiMessage(json.encode({ message = message, state = state }))
end

RegisterCommand("toggleMenu", toggleMenu)
RegisterKeyMapping("toggleMenu", "Toggles the mod menu.", "keyboard", key)