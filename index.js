require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js')
// Client = Bot ka remote control. Isse tu bot banata hai aur chalaata hai.
// GatewayIntentBits = Ye batata hai bot ko kya sunna hai server me.

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

client.on('messageCreate', (message) => {
    // console.log(message);
    // console.log(message.content);
    if (message.author.bot) return  // for original discord bot
    if (message.content.startsWith('create')) {
        const url = message.content.split(' ')[1]
        return message.reply({
            content: 'Generating ShortID for URL ' + url
        })
    }
    message.reply({
        content: 'Hi from Bot'
    })
})

client.on('interactionCreate', (interaction) => {
    // console.log(interaction)
    interaction.reply('Pong!!')
})

client.login(process.env.BOT_TOKEN)