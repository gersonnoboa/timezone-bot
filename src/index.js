const Discord = require('discord.js');
const Bot = require('./classes/bot');

const client = new Discord.Client();
const bot = new Bot(client);
bot.start();
