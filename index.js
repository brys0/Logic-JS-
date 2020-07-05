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
var handler = require("@tomdev/discord.js-command-handler")
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
module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run(reaction, user) {
    const message = reaction.message;
    if (message.author.id === user.id) return;
    if (reaction.emoji.name !== '⭐') return;
    const { starboardChannel } = this.client.settings.get(message.guild.id);
    const starChannel = message.guild.channels.find(channel => channel.name == starboardChannel)
    if (!starChannel) return message.channel.send(`It appears that you do not have a \`${starboardChannel}\` channel.`); 
    const fetchedMessages = await starChannel.fetchMessages({ limit: 100 });
    const stars = fetchedMessages.find(m => m.embeds[0].footer.text.startsWith('⭐') && m.embeds[0].footer.text.endsWith(reaction.message.id));
    if (stars) {
      const star = /^\⭐\s([0-9]{1,3})\s\|\s([0-9]{17,20})/.exec(stars.embeds[0].footer.text);
      const foundStar = stars.embeds[0];
      const image = message.attachments.size > 0 ? await this.extension(reaction, message.attachments.array()[0].url) : '';
      const embed = new MessageEmbed()
        .setColor(foundStar.color)
        .setDescription(foundStar.description)
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setTimestamp()
        .setFooter(`⭐ ${parseInt(star[1])-1} | ${message.id}`)
        .setImage(image);
      const starMsg = await starChannel.fetchMessage(stars.id);
      await starMsg.edit({ embed });
      if(parseInt(star[1]) - 1 == 0) return starMsg.delete(1000);
    }
  }

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