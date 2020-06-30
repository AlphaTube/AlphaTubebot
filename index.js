const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready" , async () => {
    console.log('$ {bot.user.username} is online!')
    bot.user.setActivity(`For - in ${bot.guilds.cache.size} Servers!`, {type:"WATCHING"});

})

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args =  messageArray.slice(1);
    if(cmd.substring(0,prefix.length) == prefix) {
        switch(cmd) {
            case'-hello':
                message.channel.send('Hello');
                break;
            case'-who-am-I?':
                message.channel.send(`You are ${message.author.username}!`);
                break;
        
            case'-hi-there':
                message.channel.send('Uhh Hello?');
                break;
                case'Are-you-okay':
                message.channel.send('No not at all.');
                break;
            case'-wazup':
                message.channel.send('Wazup Dog');
                break;
            case'-What-are-you':
                message.channel.send('Your worst nightmare');
                break;
            case'-bye':
                message.channel.send('Bye');
                break;
            case'-ping':
                message.channel.send('Pong');
                break;
            case`-server-info`:
                message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
                break;
            case'-servers':
                message.channel.send(`I'm in ${bot.guilds.cache.size} Servers!`);
                break;
            case`-user-info`:
                message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
                break;
            case'-invite':
                message.channel.send(`Here's where you can add me to your server! https://discord.com/oauth2/authorize?client_id=725807798117597195&scope=bot&permissions=8
And here's my support server! https://discord.gg/DSJAd7M`);
                break;
            case`-Who-made-you?`:
                message.channel.send(`My Creator is @BrydenTubeYT He's great at coding me not.`);
                break;
            
                
                

              
        }
    }
})

bot.login(botconfig.token);