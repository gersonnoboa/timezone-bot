const TimeConverter = require('./time-converter');

class Bot {
  constructor(client) {
    this.client = client;
  }

  start() {
    const token = process.env.TIMEZONE_BOT_DISCORD_TOKEN;
    if (!token) {
      // eslint-disable-next-line no-console
      console.error('No token provided.');
      process.exit(1);
    }

    this.client.once('ready', () => {
      // eslint-disable-next-line no-console
      console.log('Ready!');
    });

    this.client.login(token);

    this.client.on('message', (message) => {
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

module.exports = Bot;
