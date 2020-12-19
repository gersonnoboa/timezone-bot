const TimeConverter = require('./time-converter');

class Bot {
  constructor(client, config) {
    this.client = client;
    this.config = config;
  }

  start() {
    const token = `${this.config.token}`;
    if (!token) {
      // eslint-disable-next-line no-console
      console.error('No token provided in config.json');
      process.exit(1);
    }

    this.client.once('ready', () => {
      // eslint-disable-next-line no-console
      console.log('Ready!');
    });

    this.client.login(this.config.token);

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
