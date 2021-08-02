const Discord = require('discord.js')
const keepAlive = require("./server")
 
 
 const DISCORD_TOKEN = process.env['DISCORD_TOKEN'];
const CHANNEL_ID = process.env['CHANNEL_ID']
const client = new Discord.Client();




client.on('ready', () => {
     console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg =>{
    //checking if bot
if (msg.author.bot)return
//ping/pong
if(msg.content.toUpperCase() === 'PING'){msg.reply('pong')
 }else if(msg.content.toUpperCase() === 'PONG')msg.reply('ping')

if(containsUrl(msg.content)){
    msg.channel.send(`<@${msg.author.id}> Sorry, this channel dosn't allow urls`)
            msg.delete()
}


      });

let containsUrl = (message) => {
  message = message.toLowerCase()
  let urlFound = false
  if (message.includes('http://') ||
      message.includes('https://') ||
      message.includes('www')) {
        urlFound = true
  }
  return urlFound
}
keepAlive()
client.login(DISCORD_TOKEN);