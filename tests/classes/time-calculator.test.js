import { DateTime } from 'luxon';
import TimeCalculator from '../../src/classes/time-calculator.js';
import Region from '../../src/models/region.js';
import RegionDate from '../../src/models/region-date.js';

const timeCalculator = new TimeCalculator();

describe('Time calculator', () => {
  test('it calculates all dates correctly for Estonia', () => {
    const date = DateTime.utc();
    const regionDate = new RegionDate(date, Region.ESTONIA);
    const dateGroup = timeCalculator.convert(regionDate);

    expect(dateGroup.originalDate.date).toEqual(date);
    expect(dateGroup.additionalDates).toHaveLength(4);
  });

  test('it calculates all dates correctly for UK', () => {
    const date = DateTime.utc();
    const regionDate = new RegionDate(date, Region.UK);
    const dateGroup = timeCalculator.convert(regionDate);

    expect(dateGroup.originalDate.date).toEqual(date);
    expect(dateGroup.additionalDates).toHaveLength(4);
  });

  test('it calculates all dates correctly for Ecuador', () => {
    const date = DateTime.utc();
    const regionDate = new RegionDate(date, Region.ECUADOR);
    const dateGroup = timeCalculator.convert(regionDate);

    expect(dateGroup.originalDate.date).toEqual(date);
    expect(dateGroup.additionalDates).toHaveLength(4);
  });

  test('it calculates all dates correctly for Canada', () => {
    const date = DateTime.utc();
    const regionDate = new RegionDate(date, Region.CANADA);
    const dateGroup = timeCalculator.convert(regionDate);

    expect(dateGroup.originalDate.date).toEqual(date);
    expect(dateGroup.additionalDates).toHaveLength(4);
  });

  test('it calculates all dates correctly for NY', () => {
    const date = DateTime.utc();
    const regionDate = new RegionDate(date, Region.NY);
    const dateGroup = timeCalculator.convert(regionDate);

    expect(dateGroup.originalDate.date).toEqual(date);
    expect(dateGroup.additionalDates).toHaveLength(4);
  });
});
