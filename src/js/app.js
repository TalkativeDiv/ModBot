const discord = require('discord.js')
import { DISCORD_TOKEN } from ('./constrains');
const client = new Discord.Client();

client.on('ready', () => {
     console.log(`Logged in as ${client.user.tag}!`);//says the bots name in console
});

client.on('message', msg =>{
if(msg.content === 'ping'){
      msg.reply('pong');}
});

client.login(DISCORD_TOKEN);