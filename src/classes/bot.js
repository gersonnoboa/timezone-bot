const TimeMatcher = require("./time-matcher");
const BotTimeConvert = require("./bot-time-convert")

class Bot {
    constructor(client, config) {
        this.client = client;
        this.config = config;
    }

    start() {
        this.client.once('ready', () => {
            console.log('Ready!');
        });
        
        this.client.login(this.config.token);
        
        this.client.on('message', message => {
            if (message.author.bot) { return }

            this.sendTimesMessageIfPossible(message);    
        });
    }

    sendTimesMessageIfPossible(message) {
        const timesMessage = new BotTimeConvert().convert(message);
        if (timesMessage == null) { return }

        message.channel.send(timesMessage);
    }
    
}

module.exports = Bot;