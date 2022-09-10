import Region from '../models/region.js';

class RegionMapper {
  static map(region) {
    switch (region) {
      case Region.ESTONIA:
        return 'Europe/Tallinn';
      case Region.UK:
        return 'Europe/London';
      case Region.ECUADOR:
        return 'America/Guayaquil';
      case Region.CANADA:
        return 'America/St_Johns';
      case Region.NY:
        return 'America/New_York';
      default:
        return 'UTC';
    }
  }
}

export default RegionMapper;
