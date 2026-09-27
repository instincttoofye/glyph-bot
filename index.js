import "dotenv/config";

import {
    Client,
    GatewayIntentBits,
    Events,
} from "discord.js";

import processCommand from "./commandProcessor.js";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,

    ],
});

client.once("ready", () => {
    console.log(`Bot logged in as ${client.user.tag}`);
});

client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return;

    if (!message.content.startsWith("!")) return;

    const command = message.content.slice(1);
    processCommand(message, command);
})

client.login(process.env.DISCORD_BOT_TOKEN);