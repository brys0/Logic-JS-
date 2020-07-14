const { DiscordAPIError } = require("discord.js");
const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = require('chalk');
const { request } = require("http");

module.exports = {
	name: 'source',
	description: 'Information about the code',
	execute(message, args) {
        var github = new Discord.MessageEmbed()
        .setTitle('Github Repo', true)
		.setURL('https://battery-productions.digital/')
        .addField('The Link:',`oof` , true)
        .addField(`info:`,'This repo is private till i make it eaiser to use and get more cmds!',true)
        .setFooter('Server Guard => Source')
		.setTimestamp()
		.setColor('6e5494')
              message.channel.send(github);
            },
        };