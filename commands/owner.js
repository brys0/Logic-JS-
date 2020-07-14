
const { DiscordAPIError } = require("discord.js");
const { format } = require("path");
const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
const dynamic = new Discord.Client();
const fs = require('fs');
var memory = require("memory");
module.exports = {
	name: 'owner',
	aliases: ["own", "admin"],
	category: "info",
	description: 'Get the bot owner',
	usage: "!l owner",
	run: async function (client, command, args, message) {
        const embed = new Discord.MessageEmbed()
        .setTitle('owner')
        .addField('Owner:', '<@443166863996878878>', true)
        .setColor('RANDOM')
        message.channel.send(embed)
    }}