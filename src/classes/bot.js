const TimeMatcher = require("./time-matcher");

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

        message.channel.send(`La hora es ${time}`);
    }
}

module.exports = Bot;