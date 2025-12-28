game "gta5"
fx_version "cerulean"

ui_page "client/html/index.html"

files { "client/html/*", "client/data.json" }

client_scripts { "client/core/*.lua", "client/commands/*.lua" }
server_scripts { "server/*.lua" }