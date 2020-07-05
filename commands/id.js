
const { DiscordAPIError } = require("discord.js");
const { format } = require("path");
const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
const dynamic = new Discord.Client();
const fs = require('fs');
var memory = require("memory");
module.exports = {
	name: 'id',
	aliases: ["id"],
	category: "info",
	description: 'Get mentioned users account id',
	usage: "!l id @user",
	run: async function (client, command, args, message) {
        const user = message.mentions.users.first() || message.author;
        const guild = message.guild
        if (user) member = message.guild.member(user);
        message.channel.send(`User id: ${user.id}`)
    }}
