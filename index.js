const fs = require('fs');
const Discord = require('discord.js');
const { token } = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const { Command } = require('@adonisjs/ace')
const chalk = require('chalk');
const moment = require('moment');
const sql = require('sqlite');
const ytdl = require("ytdl-core");
const queue = new Map();
const bot = new Discord.Client();
const { ErelaClient, Utils } = require("erela.js")
var prefix = "!l"

var cmdhandler = new handler(client, "/commands", prefix)
client.on("message", (message) => {
    cmdhandler.handleCommand(message)
})
const activities_list = [
  "online...", 
  ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
  
      client.user.setActivity('Online..'); 
});
client.on('message', message => {
if (message.mentions.has(client.user)) {
message.channel.send('Prefix is: `!l`')
}
});


client.on('messageDelete', message => {
  const channel1 = message.member.guild.channels.cache.find(ch => ch.name === 'modlog');
  if (!channel1) return;
  const user = message.author;
  console.log(`${message.id} was deleted!`);
  const messageDelete = new Discord.MessageEmbed()
  .setTitle('Message Delete')
  .addField('in channel', message.channel)
  .addField('User', `${message.author}`)
  .addField('Content in message', "`" + "``asciidoc\n" + `[${message.content}]` + "\n`" + "``")
  .addField('Attachments (if any)', 'Disabled')
  .setFooter('Logic -> Loggging. Deleted')
  .setTimestamp()
  .setColor('#8B0000')
  .setThumbnail(user.displayAvatarURL({ dynamic:true }))
channel1.send(messageDelete)
  // Partial messages do not contain any content so skip them
  if (!message.partial) {
    console.log(`It had content: "${message.content}"`);
    
  }
});

  // Now, it may seem weird that we use this in the messageReactionRemove event, but we still need to check if there's an image so that we can set it, if necessary.
  extension(reaction, attachment) {
    const imageLink = attachment.split('.');
    const typeOfImage = imageLink[imageLink.length - 1];
    const image = /(jpg|jpeg|png|gif)/gi.test(typeOfImage);
    if (!image) return '';
    return attachment;
  };
};


 

client.login(token)
