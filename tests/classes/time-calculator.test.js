const TimeCalculator = require("../../src/classes/time-calculator");
const timeCalculator = new TimeCalculator();
const Luxon = require('luxon');
const regions = require("../../src/models/region");
const RegionDate = require("../../src/models/region-date");

describe('Time calculator', () => {
    test('it calculates all dates correctly for Estonia', () => {
        let date = Luxon.DateTime.utc();
        let regionDate = new RegionDate(date, regions.ESTONIA);
        let dateGroup = timeCalculator.convert(regionDate);

        expect(dateGroup.originalDate.date).toEqual(date);
        expect(dateGroup.additionalDates).toHaveLength(2);
    });

    test('it calculates all dates correctly for UK', () => {
        let date = Luxon.DateTime.utc();
        let regionDate = new RegionDate(date, regions.UK);
        let dateGroup = timeCalculator.convert(regionDate);

        expect(dateGroup.originalDate.date).toEqual(date);
        expect(dateGroup.additionalDates).toHaveLength(2);
    });

    test('it calculates all dates correctly for Ecuador', () => {
        let date = Luxon.DateTime.utc();
        let regionDate = new RegionDate(date, regions.ECUADOR);
        let dateGroup = timeCalculator.convert(regionDate);

        expect(dateGroup.originalDate.date).toEqual(date);
        expect(dateGroup.additionalDates).toHaveLength(2);
    });
});