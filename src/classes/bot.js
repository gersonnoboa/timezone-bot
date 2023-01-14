import * as dotenv from 'dotenv';
import { Events } from 'discord.js';
import TimeConverter from './time-converter.js';

class Bot {
  constructor(client) {
    this.client = client;
    dotenv.config();
  }

  start() {
    const token = process.env.TIMEZONE_BOT_DISCORD_TOKEN;
    if (!token) {
      // eslint-disable-next-line no-console
      console.error('No token provided.');
      process.exit(1);
    }

    this.client.once(Events.ClientReady, () => {
      // eslint-disable-next-line no-console
      console.log('Bot is ready to start receiving messages...');
    });

    this.client.login(token);

    this.client.on(Events.MessageCreate, async (message) => {
      if (message.author.bot) {
        return;
      }

      this.sendTimesMessageIfPossible(message);
    });
  }

  sendTimesMessageIfPossible(message) {
    const timesMessage = new TimeConverter().convert(message);
    if (timesMessage == null) {
      return;
    }

    message.channel.send(timesMessage);
  }
}

export default Bot;
