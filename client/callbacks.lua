for _, relay in pairs({
    "setTime",
    "setWeather"
}) do
    RegisterNuiCallback(relay, function(data, cb)
        TriggerServerEvent(relay, data)
        cb({})
    end)
end

RegisterNuiCallback("notify", function(data, cb)
    Notifier:notify(data.text)
    cb({})
end)

RegisterNuiCallback("setInvincible", function(data, cb)
    State.client.invincible = data.value
    SetEntityInvincible(PlayerPedId(), data.value)
    cb({})
end)

RegisterNuiCallback("setInfiniteStamina", function(data, cb)
    State.client.infiniteStamina = data.value
    cb({})
end)

RegisterNuiCallback("setWantedLevel", function(data, cb)
    local ped = PlayerPedId()
    TriggerServerEvent("setWantedLevel", data.level)
    SetPlayerWantedLevel(ped, data.level)
    SetPlayerWantedLevelNow(ped, false)
    cb({})
end)

RegisterNuiCallback("clearWantedLevel", function(data, cb)
    ClearPlayerWantedLevel(PlayerPedId())
    cb({})
end)

RegisterNuiCallback("getAllWeapons", function(_, cb)
    for _, hash in pairs(Shared.weapons) do
        GiveWeaponToPed(PlayerPedId(), hash, false, false)
    end
    Notifier:notify("Gave all weapons!")
    cb({})
end)

RegisterNuiCallback("getMaxAmmo", function(_, cb)
    for _, hash in pairs(Shared.weapons) do
        SetPedAmmo(PlayerPedId(), hash, 9999)
    end
    Notifier:notify("Gave max ammo!")
    cb({})
end)