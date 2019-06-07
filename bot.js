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
   ``@client.command(pass_context=True)
async def stats(ctx):
    author = ctx.message.author
    servers = list(client.servers)
    embed = discord.Embed(description=" ", color=0xFFFF)
    embed.add_field(name="Servers:", value=f"{str(len(servers))}")
    embed.add_field(name="Users:", value=f"{str(len(set(client.get_all_members())))}")
    embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/528218351378497548/541395759363391513/epic_logo.png")
    embed.set_footer(text=" | {}".format(bot.user.name), icon_url="https://cdn.discordapp.com/attachments/528218351378497548/541395759363391513/epic_logo.png")
    await client.say(embed=embed)
    embed = discord.Embed(title=f"User: {ctx.message.author.name} have used stats command", description=f"User ID: {ctx.message.author.id}", color=0xff9393)
    embed.set_image(url="https://cdn.discordapp.com/attachments/524655977832775710/541446963887996939/Fade_image.png")
   await client.send_message(channel, embed=embed)``
   
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
