local isMenuOpen = false
local displayedInfo = false

-- register callback

local function toggleMenu()
    isMenuOpen = not isMenuOpen

    SetNuiFocus(isMenuOpen, isMenuOpen)

    local message

    if isMenuOpen then
        message = "open"
    else
        message = "close"
    end

    SendNuiMessage(json.encode({
        message = message,
        state = State.server,
        clientState = State.client,
        build = tostring(GetGameBuildNumber())
    }))
end

RegisterNuiCallback("toggle", function (_, cb)
    toggleMenu()
    cb({})
end)

-- register keys

RegisterCommand("toggleMenu", toggleMenu)
RegisterKeyMapping("toggleMenu", "Toggles the mod menu.", "keyboard", Shared.menuKey)

-- show info

AddEventHandler("playerSpawned", function()
    if not displayedInfo then
        displayedInfo = true
        Notifier:notify("Press " .. Shared.menuKey .. " to open the control panel.")
    end
end)