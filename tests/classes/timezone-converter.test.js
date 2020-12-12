const TimezoneConverter = require("../../src/classes/timezone-converter");
const regions = require("../../src/models/region");
const Luxon = require('luxon');
const RegionDate = require("../../src/models/region-date");

describe('Timezone converter', () => {
    describe('Hard timezone change', () => {
        test('Maps Estonian time correctly', () => {
            const date = TimezoneConverter.convertTimezoneHard(Luxon.DateTime.utc(), regions.ESTONIA);
            
            expect(date.zoneName).toEqual('Europe/Tallinn');
        });
    
        test('Maps UK time correctly', () => {
            const date = TimezoneConverter.convertTimezoneHard(Luxon.DateTime.utc(), regions.UK);

            expect(date.zoneName).toEqual('Europe/London');
        });
    
        test('Maps Ecuadorian time correctly', () => {
            const date = TimezoneConverter.convertTimezoneHard(Luxon.DateTime.utc(), regions.ECUADOR);

            expect(date.zoneName).toEqual('America/Guayaquil');
        });
    });

    describe('Soft timezone change', () => {
        test('Maps Estonian time correctly', () => {   
            const date = TimezoneConverter.convertTimezoneSoft(Luxon.DateTime.utc(), regions.ESTONIA);

            expect(date.zoneName).toEqual('Europe/Tallinn');
        });
    
        test('Maps UK time correctly', () => {
            const date = TimezoneConverter.convertTimezoneSoft(Luxon.DateTime.utc(), regions.UK);

            expect(date.zoneName).toEqual('Europe/London');
        });
    
        test('Maps Ecuadorian time correctly', () => {
            const date = TimezoneConverter.convertTimezoneSoft(Luxon.DateTime.utc(), regions.ECUADOR);

            expect(date.zoneName).toEqual('America/Guayaquil');
        });
    });
});