const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '$Whomade') {
    	message.reply('this bot was made by IM CAPPING#2410');
  	}
});

client.on('message', message => {
    if (message.content === '$help') {
    	message.reply('heres the list of commands $help to get this help pop up menu $gen to gen a account $stock $bam $kick  $mute');
  	}
    client.on('message', message => {
    if (message.content === '$Ping') {
    	message.reply('@everyone @dani xd#6502 ');
  	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
