const Discord = require('discord.js')
const keepAlive = require("./server")
 
 
 const DISCORD_TOKEN = process.env['DISCORD_TOKEN'];
const CHANNEL_ID = process.env['CHANNEL_ID']
const badWords = ["FUCK","SHIT","DICK","ASS","PENIS"];
const client = new Discord.Client();




client.on('ready', () => {
     console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg =>{
if (msg.author.bot)return

if(msg.content.toUpperCase() === 'PING'){
   msg.reply('pong')
      }
      for(var i = 0; i < badWords.length; i++) {
    if (badWords[i] == msg.content.toUpperCase()) {
        
        break;
    }
}

      }
      

     
);
keepAlive()
client.login(DISCORD_TOKEN);

