import "dotenv/config";

import {
    Client,
    GatewayIntentBits,
    Events,
} from "discord.js";

import processCommand from "./commandProccessor.js";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,

    ],
});

client.once(Events.ClientReady, async (readyClient) => {
    console.log("=== CONNECTED BOT ===");
    console.log("Username:", readyClient.user.tag);
    console.log("User ID:", readyClient.user.id);
    console.log("Application ID:", readyClient.application.id);
    console.log("=====================");
});

client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return;

    if (!message.content.startsWith("!")) return;

    const command = message.content.slice(1);
    console.log("command ", command.toString());
    processCommand(message, command);
})

client.login(process.env.TOKEN);

