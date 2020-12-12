const Regions = require("../models/region");
const TimezoneConverter = require("./timezone-converter");
const DateGroup = require('../models/date-group');
const RegionDate = require("../models/region-date");

class TimeCalculator {
    convert(regionDate) {
        var additionalDates = new Array();

        for (const key in Regions) {
            const newRegion = Regions[key];
            if (newRegion == regionDate.region) { continue }

            const convertedDate = TimezoneConverter.convertTimezoneSoft(regionDate.date, newRegion);
            const newRegionDate = new RegionDate(convertedDate, newRegion);
            additionalDates.push(newRegionDate);
        }

        return new DateGroup(regionDate, additionalDates);
    }
}

module.exports = TimeCalculator;