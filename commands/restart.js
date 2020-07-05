
const { DiscordAPIError } = require("discord.js");
const { format } = require("path");
const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
const dynamic = new Discord.Client();
const fs = require('fs');
var memory = require("memory");
const { ShardingManager } = require('discord.js');
const { token } = require('../config.json');
module.exports = {
	name: 'reset',
	aliases: ["reset", "restart"],
	category: "developer",
	description: 'complety resets bot',
	usage: "!l reset",
	run: async function (client, command, args, message) {

message.channel.send('Restarting shard...').then(m => {
	client.destroy().then(() => {
	  client.login(token);
	});
})}}