-- functions

function setWantedLevel(level)
    SetPlayerWantedLevel(PlayerId(), level, false)
    SetPlayerWantedLevelNow(PlayerId(), false)
end

-- callbacks

RegisterNuiCallback("setInvincible", function(data, cb)
    State.client.invincible = data.value
    SetPlayerInvincible(PlayerId(), data.value)
    cb({})
end)

RegisterNuiCallback("setInfiniteStamina", function(data, cb)
    State.client.infiniteStamina = data.value
    cb({})
end)

RegisterNuiCallback("setWantedLevel", function(data, cb)
    setWantedLevel(data.level)
    cb({})
end)

RegisterNuiCallback("setNeverWanted", function(data, cb)
    State.client.neverWanted = data.value
    cb({})
end)

-- reapply state

AddEventHandler("playerSpawned", function()
    if State.client.invincible then
        SetPlayerInvincible(PlayerId(), State.client.invincible)
    end
end)

-- tick

Citizen.CreateThread(function()
    while true do
        if State.client.infiniteStamina then
            SetPlayerStamina(PlayerId(), GetPlayerMaxStamina(PlayerId()))
        end

        if State.client.neverWanted then
            setWantedLevel(0)
        end
        
        Citizen.Wait(0)
    end
end)