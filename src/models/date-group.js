const { DateTime } = require("luxon");

class DateGroup {
    constructor(originalDate, additionalDates) {
        this.originalDate = originalDate;
        this.additionalDates = additionalDates;
    }

    toStrings() {
        var strings = new Array();
        strings.push(`${this.originalDate.date.toLocaleString(DateTime.TIME_SIMPLE)} en ${this.originalDate.region}`);
        
        for (const index in this.additionalDates) {
            const additionalDate = this.additionalDates[index];
            strings.push(`${additionalDate.date.toLocaleString(DateTime.TIME_SIMPLE)} en ${additionalDate.region}`);
        }

        return strings;
    }
}

module.exports = DateGroup;