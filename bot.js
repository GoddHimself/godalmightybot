const Discord = require('discord.js');
const bot = new Commando.Client();
const TOKEN = 'NTI0MDQwOTkyNTcyMTc4NDMz.DvisRQ.2w5zjtbf3gUx85giY5mFnvmeUZc'

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('admin', 'Admin');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};

bot.on('ready',function(){
    console.log("Ready");
    bot.user.setActivity("!help", {type: 'PLAYING'})
});

bot.on('message', function(message){
    if(message.content == 'Hello')
{
    message.channel.sendMessage('Welcome! ' +message.author + ', I shall protect you from the furries!');
}
});

bot.on("guildMemberAdd", function(member)
{
    member.send("Welcome to the Server you frick!");
    let memberRole = member.guild.roles.find("name", "Dictator");
    message.member.addRole(memberRole); 
});

bot.on('message', function(message){
    if(message.content == '!sans')
{
    message.channel.sendMessage('**you feel like you are going to have a bad time**');
}
if(message.content == 'Join')
{
    message.member.send("Welcome to the Server you frick!");

}
});


bot.on('message', function(message){
if(message.content == '289917349')
{
    message.member.send("Thanks for using this product code! Your item will be delivered shortly. If your item isn't delivered after a day, please contact a moderator to help with the problem.");

}

});

bot.on('ready',function(){
    console.log("Ready");
})

bot.login(TOKEN);

client.login(process.env.NTI0MDQwOTkyNTcyMTc4NDMz.DvtKzQ.MZ1XRGESMYiVxAbWs-m2LyBdMsQ);
