const timeRegex = /\b((0?[1-9]|1[012])([:.][0-5][0-9])?(\s?[ap]m)|([01]?[0-9]|2[0-3])([:.][0-5][0-9]))\b/i

class TimeMatcher {
    hasTime(message) {
        return timeRegex.test(message);
    }

    getTime(message) {
        let matches = message.match(timeRegex)
        
        if (matches == null || matches.length === 0) { return undefined; }
        else { return matches[0]; }
    }
}

module.exports = TimeMatcher;
