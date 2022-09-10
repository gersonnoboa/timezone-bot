import TimeMatcher from './time-matcher.js';
import TimeToLuxonConverter from './time-to-luxon-converter.js';
import UsernameMapper from './username-mapper.js';
import TimezoneConverter from './timezone-converter.js';
import TimeCalculator from './time-calculator.js';
import RegionDate from '../models/region-date.js';

class TimeConverter {
  convert(message) {
    const time = this._getTime(message.content);
    if (time == null) {
      return undefined;
    }

    const date = this._getLuxonDate(time);
    if (date == null) {
      return undefined;
    }

    const region = UsernameMapper.map(message.author.username);
    const convertedDate = TimezoneConverter.convertTimezoneHard(date, region);
    const regionDate = new RegionDate(convertedDate, region);
    const dategroup = this._getDateGroup(regionDate);

    return dategroup.toStrings().join('\n');
  }

  _getTime(content) {
    const timeMatcher = new TimeMatcher();
    if (!timeMatcher.hasTime(content)) {
      return undefined;
    }

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

export default TimeConverter;
