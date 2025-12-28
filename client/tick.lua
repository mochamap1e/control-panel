Citizen.CreateThread(function()
    while true do
        local id = PlayerId()
        
        if State.client.infiniteStamina then
            SetPlayerStamina(id, GetPlayerStamina(id))
        end
        
        Citizen.Wait(0)
    end
end)