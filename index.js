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
const handler = require('@tomdev/discord.js-command-handler')
const { ErelaClient, Utils } = require("erela.js");
const { Color, green, magenta, blue } = require('chalk');
const { orange } = require('color-name');
var prefix = "!l"
let sleep = require('js-sleepms');

const wait = require('waait');
client.on('ready', (ready) => { 
  console.log(chalk.red(`                           888      .d88888b.   .d8888b.  8888888 .d8888b.                    888888  .d8888b.  
                           888     d88P" "Y88b d88P  Y88b   888  d88P  Y88b                   "88b   d88   Y88b 
                           888     888     888 888    888   888  888    888  ==============    888   Y88b.      
                           888     888     888 888          888  888         ==============    888   "Y888b.   
                           888     888     888 888  88888   888  888         ==============    888     "Y88b. 
                           888     888     888 888    888   888  888    888  ==============    888       "888 
                           888     Y88b. .d88P Y88b  d88P   888  Y88b  d88P  ==============    88P   Y88b  d88P 
                          88888888 "Y88888P"   "Y8888P88 8888888 "Y8888P"                     888     "Y8888P"  
                                                                                            d88P            
                                                                                        .d88P"  `));
                                                                                    
                                                                                        console.time('sleep')
                                                                                        setTimeout(() => { console.timeEnd('sleep') }, 100) 
                                                                                        sleep(1000)
console.log(chalk.yellow("Booting internals.."));
sleep.SleepMS(5000);
console.log(chalk.blue("Connecting to web socket.."));
sleep.SleepMS(5000);
console.log(chalk.magenta("Fully booted"));
sleep.SleepMS(5000);
})
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


client.login(token)
