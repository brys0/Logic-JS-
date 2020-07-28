
const Discord = require('discord.js');
const { token } = require('./config.json');

const bot = new Discord.Client();
bot.music = new (require('discord.js-lavalink-musicbot'))(bot, {
    lavalink: {
        "restnode": {
            "host": "localhost",
            "port": 8643,
            "password":"youshallnotpass"
        },
        "nodes": [
            { "host": "localhost", "port": 8643, "region": "asia", "password": "youshallnotpass" }
        ]
    },
    admins: ["455346525716086795"]
});
 
bot.login('bot token here');
client.login(token)
