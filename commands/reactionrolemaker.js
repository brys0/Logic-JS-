const { DiscordAPIError } = require("discord.js");
const { format } = require("path");
const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
const ReactionRole = require("reaction-role");
const reactionRole = new ReactionRole("Njk5MDA5NTA5MDQ1MzA1Mzc0.XvKB_A.fXqomS741gUeaenHL1l73m1KJJ4");
module.exports = {
	name: 'reactionrolemaker',
	aliases: ["rrm", "reactionmake"],
	category: "misc",
	description: 'Utilty to make a reaction that gives the user a role',
	usage: "=rrm",
	run: async function (client, command, args, message) {
        message.channel.send('Alright what emoji would you like to Use? (has to be an emoji!) 15 secs');
        const filter = m => m.content.includes('✅','❌','☹️');
        const collector = message.channel.createMessageCollector(filter, { time: 15000 });
        if (message.author.bot);
        collector.on('end', collected => {
            const filter = m => m.content.includes('✅','❌','☹️');
            message.channel.send(`Alright you **undefined**to be the emoji to be the reaction?`);
            if (message.content !== "cancel") {
            message.channel.send('Canceled reaction maker!');
            }
            console.error()
        });
        

        
    }
}



