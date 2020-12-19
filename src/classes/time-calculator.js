const Regions = require('../models/region');
const TimezoneConverter = require('./timezone-converter');
const DateGroup = require('../models/date-group');
const RegionDate = require('../models/region-date');

class TimeCalculator {
  convert(regionDate) {
    const additionalDates = [];

    for (let index = 0; index < Object.values(Regions).length; index += 1) {
      const value = Object.values(Regions)[index];
      if (value === regionDate.region) {
        // eslint-disable-next-line no-continue
        continue;
      }

      const convertedDate = TimezoneConverter.convertTimezoneSoft(
        regionDate.date,
        value
      );
      const newRegionDate = new RegionDate(convertedDate, value);
      additionalDates.push(newRegionDate);
    }

    return new DateGroup(regionDate, additionalDates);
  }
}

module.exports = TimeCalculator;
