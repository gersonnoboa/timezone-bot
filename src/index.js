const Discord = require('discord.js');
const Bot = require('./classes/bot');
const config = require('./config/config.json');

const client = new Discord.Client();
const bot = new Bot(client, config);
bot.start();
