const regions = require("../models/region");
const RegionMapper = require("../models/region-mapper");

class TimezoneConverter {
    static convertTimezoneHard(date, region) {
        return this._convertTimezone(date, region, true);
    }

    static convertTimezoneSoft(date, region) {
        return this._convertTimezone(date, region, false);
    }

    static _convertTimezone(date, region, isHard) {
        const timezoneName = RegionMapper.map(region);
        return date.setZone(timezoneName, { keepLocalTime: isHard });
    }
}

module.exports = TimezoneConverter;