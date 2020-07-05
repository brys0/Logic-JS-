
const { DiscordAPIError } = require("discord.js");
const { format } = require("path");
const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
const dynamic = new Discord.Client();
const fs = require('fs');
var memory = require("memory");
module.exports = {
	name: 'help',
	aliases: ["h", "help"],
	category: "info",
	description: 'Get the general help page',
	usage: "!l help",
	run: async function (client, command, args, message) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Help')
        .addField('whois', 'usage: !l whois @user', true)
        .addField('id', 'usage: !l id @user', true)
        .addField('`Developer`', true)
        .addField('Eval', 'evalautes code')
        .addField('LOGGING', true)
        .addField('Message Delete', 'Status: Stable :yellow_circle: (for more info on whats wrong run `!l statuslogs`) ')
        .addField('Message Edit', 'Status: Fucked :red_circle: ')
        message.channel.send(embed)
    }}