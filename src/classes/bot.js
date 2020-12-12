const TimeMatcher = require("./time-matcher");
const TimeConverter = require("./time-converter");

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
            console.log(message.author);
            this.matchMessage(message);
        });
    }

    matchMessage(message) {
        const timeMatcher = new TimeMatcher();
        const content = message.content; 
        if (!timeMatcher.hasTime(content)) { return }

        let time = timeMatcher.getTime(content);
        if (time === undefined) { return }

        const timeConverter = new TimeConverter();
        const message = timeConverter.convert(time, message.user.username);
        message.channel.send(message);
    }
}

module.exports = Bot;