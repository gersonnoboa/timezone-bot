const Regions = require("../../src/models/region");
const RegionMapper = require("../../src/models/region-mapper");

describe('Region mapper', () => {
    test('Estonia', () => {
        expect(RegionMapper.map(Regions.ESTONIA)).toEqual("Europe/Tallinn");
    });

    test('UK', () => {
        expect(RegionMapper.map(Regions.UK)).toEqual("Europe/London");
    });

    test('Ecuador', () => {
        expect(RegionMapper.map(Regions.ECUADOR)).toEqual("America/Guayaquil");
    });
})