for _, relay in pairs({
    
}) do
    RegisterNuiCallback(relay, function(data, cb)
        TriggerServerEvent(relay, data)
        cb({})
    end)
end

RegisterNuiCallback("setWantedLevel", function(data, cb)
    SetPlayerWantedLevel(PlayerId(), data.level, false)
    SetPlayerWantedLevelNow(PlayerId(), false)
    Notifier:notify("Set wanted level to " .. data.level .. "!")
    cb({})
end)

---------- WEAPONS ----------

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