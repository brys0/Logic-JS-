
const { DiscordAPIError } = require("discord.js");
const { format } = require("path");
const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
const dynamic = new Discord.Client();
const fs = require('fs');
var memory = require("memory");
module.exports = {
	name: 'site',
	aliases: ["site", "web" ,"website"],
	category: "info",
	description: 'Get the bots website',
	usage: "!l site",
	run: async function (client, command, args, message) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Website')
        .setURL('https://battery-productions.digital')
          .setColor('#819AD4')
          .setFooter(`Logic -> Site (Executed by: ${message.author.tag})`)
          .setTimestamp()
          message.channel.send(embed)
    }}