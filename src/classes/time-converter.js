const TimeMatcher = require("./time-matcher");
const TimeToLuxonConverter = require("./time-to-luxon-converter");
const UsernameMapper = require("./username-mapper");
const TimezoneConverter = require("./timezone-converter");
const TimeCalculator = require("./time-calculator");
const RegionDate = require("../models/region-date");

class TimeConverter {
    convert(message) {
        const time = this._getTime(message.content);
        if (time == null) { return undefined }

        const date = this._getLuxonDate(time);
        if (date == null) { return undefined }

        const region = UsernameMapper.map(message.author.username);
        const convertedDate = TimezoneConverter.convertTimezoneHard(date, region);
        const regionDate = new RegionDate(convertedDate, region);
        const dategroup = this._getDateGroup(regionDate);

        return dategroup.toStrings().join("\n");
    }

    _getTime(content) {
        const timeMatcher = new TimeMatcher();
        if (!timeMatcher.hasTime(content)) { return undefined }

        return timeMatcher.getTime(content);
    }

    _getLuxonDate(time) {
        const converter = new TimeToLuxonConverter();
        return converter.convert(time);
    }

    _getDateGroup(regionDate) {
        const calculator = new TimeCalculator();
        return calculator.convert(regionDate);
    }
}

module.exports = TimeConverter;