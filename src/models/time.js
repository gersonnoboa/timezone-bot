const regions = require("./region");

class Time {
    constructor(region, time) {
        this.region = region;
        this.time = time;
    }
}

module.exports = Time;