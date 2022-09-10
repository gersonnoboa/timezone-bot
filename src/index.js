import { Client } from 'discord.js';
import Bot from './classes/bot.js';

const client = new Client();
const bot = new Bot(client);
bot.start();
