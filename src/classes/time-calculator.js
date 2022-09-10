import Regions from '../models/region.js';
import TimezoneConverter from './timezone-converter.js';
import DateGroup from '../models/date-group.js';
import RegionDate from '../models/region-date.js';

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

export default TimeCalculator;
