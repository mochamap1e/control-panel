for _, relay in pairs({
    "setTime",
    "setWeather"
}) do
    RegisterNuiCallback(relay, function(data, cb)
        TriggerServerEvent(relay, data)
        cb({})
    end)
end

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