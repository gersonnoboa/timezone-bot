import { Client, GatewayIntentBits, Partials } from 'discord.js';
import Bot from './classes/bot.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Message, Partials.Channel],
});

const bot = new Bot(client);
bot.start();
