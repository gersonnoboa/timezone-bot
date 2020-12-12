const DateGroup = require("../../src/models/date-group");
const RegionDate = require("../../src/models/region-date");
const Luxon = require('luxon');
const regions = require("../../src/models/region");
const TimeCalculator = require("../../src/classes/time-calculator");
const timeCalculator = new TimeCalculator();

describe('DateGroup', () => {
    const jsDate = new Date(2019, 6, 12, 21);
    const zoneLength = Object.keys(regions).length;

    describe('Estonia', () => {    
        const luxonDate = Luxon.DateTime.fromJSDate(jsDate, { zone: "Europe/Tallinn" });
        const originalDate = new RegionDate(luxonDate, regions.ESTONIA);
        const dateGroup = timeCalculator.convert(originalDate);

        test('has the correct number of elements', () => {
            expect(dateGroup.toStrings()).toHaveLength(zoneLength);
        });
    });

    describe('UK', () => {
        const luxonDate = Luxon.DateTime.fromJSDate(jsDate, { zone: "Europe/London" });
        const originalDate = new RegionDate(luxonDate, regions.UK);
        const dateGroup = timeCalculator.convert(originalDate);

        test('has the correct number of elements', () => {
            expect(dateGroup.toStrings()).toHaveLength(zoneLength);
        });
    });

    describe('Ecuador', () => {
        const luxonDate = Luxon.DateTime.fromJSDate(jsDate, { zone: "America/Guayaquil" });
        const originalDate = new RegionDate(luxonDate, regions.ECUADOR);
        const dateGroup = timeCalculator.convert(originalDate);

        test('has the correct number of elements', () => {  
            expect(dateGroup.toStrings()).toHaveLength(zoneLength);
        });
    });
});
