RegisterNuiCallback("getAllWeapons", function(_, cb)
    for _, hash in pairs(Data.hashes.weapons) do
        GiveWeaponToPed(PlayerPedId(), GetHashKey(hash), false, false)
    end
    Notify("Gave all weapons!")
    cb({})
end)

RegisterNuiCallback("getMaxAmmo", function(_, cb)
    for _, hash in pairs(Data.hashes.weapons) do
        SetPedAmmo(PlayerPedId(), GetHashKey(hash), 9999)
    end
    Notify("Gave max ammo!")
    cb({})
end)