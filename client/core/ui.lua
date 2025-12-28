local isMenuOpen = false
local displayedInfo = false

-- register callback

local function toggleMenu()
    isMenuOpen = not isMenuOpen

    SetNuiFocus(isMenuOpen, isMenuOpen)

    local visible

    if isMenuOpen then
        visible = true
    else
        visible = false
    end

    SendNuiMessage(json.encode({
        visible = visible,
        serverState = State.server,
        clientState = State.client,
        gameBuild = tostring(GetGameBuildNumber())
    }))
end

RegisterNuiCallback("toggle", function (_, cb)
    toggleMenu()
    cb({})
end)

-- register keys

RegisterCommand("toggleMenu", toggleMenu)
RegisterKeyMapping("toggleMenu", "Toggles Control Panel.", "keyboard", Data.menuKey)

-- show info

AddEventHandler("playerSpawned", function()
    if not displayedInfo then
        displayedInfo = true
        Notify("Press " .. Data.menuKey .. " to open the control panel.")
    end
end)