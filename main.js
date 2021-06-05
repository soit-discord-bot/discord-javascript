const Discord = require('discord.js');

require('dotenv').config()

const client = new Discord.Client();

client.once('ready', () => {
    console.log("Bot is Online")
})

client.login(process.env.TOKEN)
