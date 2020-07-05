const { DiscordAPIError } = require("discord.js");
const { format } = require("path");
const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
const ReactionRole = require("reaction-role");
const reactionRole = new ReactionRole("TOKEN");
module.exports = {
	name: 'reactionroles',
	aliases: ["rr", "reaction"],
	category: "misc",
	description: 'make a basic reaction role',
	usage: "=rr",
	run: async function (client, command, args, message) {
        let option1 = reactionRole.createOption("✅", "714124112863428628");
        reactionRole.createMessage("725112719463940107", "712900947478839306", true, option1);
        reactionRole.init();
    }
}
