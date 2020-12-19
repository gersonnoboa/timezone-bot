const Luxon = require('luxon');
const TimeCalculator = require('../../src/classes/time-calculator');
const regions = require('../../src/models/region');
const RegionDate = require('../../src/models/region-date');

const timeCalculator = new TimeCalculator();

describe('Time calculator', () => {
  test('it calculates all dates correctly for Estonia', () => {
    const date = Luxon.DateTime.utc();
    const regionDate = new RegionDate(date, regions.ESTONIA);
    const dateGroup = timeCalculator.convert(regionDate);

    expect(dateGroup.originalDate.date).toEqual(date);
    expect(dateGroup.additionalDates).toHaveLength(2);
  });

  test('it calculates all dates correctly for UK', () => {
    const date = Luxon.DateTime.utc();
    const regionDate = new RegionDate(date, regions.UK);
    const dateGroup = timeCalculator.convert(regionDate);

    expect(dateGroup.originalDate.date).toEqual(date);
    expect(dateGroup.additionalDates).toHaveLength(2);
  });

  test('it calculates all dates correctly for Ecuador', () => {
    const date = Luxon.DateTime.utc();
    const regionDate = new RegionDate(date, regions.ECUADOR);
    const dateGroup = timeCalculator.convert(regionDate);

    expect(dateGroup.originalDate.date).toEqual(date);
    expect(dateGroup.additionalDates).toHaveLength(2);
  });
});
