require('dotenv').config();

const { REST, Routes } = require('discord.js')

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
]

const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands('1363805643605278740'), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();