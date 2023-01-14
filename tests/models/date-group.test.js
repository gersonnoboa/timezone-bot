import { DateTime } from 'luxon';
import RegionDate from '../../src/models/region-date';
import Regions from '../../src/models/region';
import TimeCalculator from '../../src/classes/time-calculator';

const timeCalculator = new TimeCalculator();

describe('DateGroup', () => {
  const jsDate = new Date(2019, 6, 12, 21);
  const zoneLength = Object.keys(Regions).length;

  describe('Estonia', () => {
    const luxonDate = DateTime.fromJSDate(jsDate, {
      zone: 'Europe/Tallinn',
    });
    const originalDate = new RegionDate(luxonDate, Regions.ESTONIA);
    const dateGroup = timeCalculator.convert(originalDate);

    test('has the correct number of elements', () => {
      expect(dateGroup.toStrings()).toHaveLength(zoneLength);
    });
  });

  describe('UK', () => {
    const luxonDate = DateTime.fromJSDate(jsDate, {
      zone: 'Europe/London',
    });
    const originalDate = new RegionDate(luxonDate, Regions.UK);
    const dateGroup = timeCalculator.convert(originalDate);

    test('has the correct number of elements', () => {
      expect(dateGroup.toStrings()).toHaveLength(zoneLength);
    });
  });

  describe('Ecuador', () => {
    const luxonDate = DateTime.fromJSDate(jsDate, {
      zone: 'America/Guayaquil',
    });
    const originalDate = new RegionDate(luxonDate, Regions.ECUADOR);
    const dateGroup = timeCalculator.convert(originalDate);

    test('has the correct number of elements', () => {
      expect(dateGroup.toStrings()).toHaveLength(zoneLength);
    });
  });
});
