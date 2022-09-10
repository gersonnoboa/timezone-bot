import RegionMapper from './region-mapper.js';

class TimezoneConverter {
  static convertTimezoneHard(date, region) {
    return this._convertTimezone(date, region, true);
  }

  static convertTimezoneSoft(date, region) {
    return this._convertTimezone(date, region, false);
  }

  static _convertTimezone(date, region, isHard) {
    const timezoneName = RegionMapper.map(region);
    return date.setZone(timezoneName, {
      keepLocalTime: isHard,
    });
  }
}

export default TimezoneConverter;
