const TimeToLuxonConverter = require("../../src/classes/time-to-luxon-converter");
const timeToLuxonConverter = new TimeToLuxonConverter();
const Luxon = require('luxon');

describe('hour only conversion', () => {
    test('converts 7PM', () => {
        let actual = timeToLuxonConverter.convert('7PM');
        let expected = Luxon.DateTime.fromObject({hour: 19})
        expect(actual.hour).toEqual(expected.hour);
    });

    test('converts 7pm', () => {
        let actual = timeToLuxonConverter.convert('7pm');
        let expected = Luxon.DateTime.fromObject({hour: 19})
        expect(actual.hour).toEqual(expected.hour);
    });

    test('converts 7am', () => {
        let actual = timeToLuxonConverter.convert('7am');
        let expected = Luxon.DateTime.fromObject({hour: 7})
        expect(actual.hour).toEqual(expected.hour);
    });

    test('converts 7AM', () => {
        let actual = timeToLuxonConverter.convert('7AM');
        let expected = Luxon.DateTime.fromObject({hour: 7})
        expect(actual.hour).toEqual(expected.hour);
    });

    test('converts 7 AM', () => {
        let actual = timeToLuxonConverter.convert('7 AM');
        let expected = Luxon.DateTime.fromObject({hour: 7})
        expect(actual.hour).toEqual(expected.hour);
    });

    test('converts 7 PM', () => {
        let actual = timeToLuxonConverter.convert('7 PM');
        let expected = Luxon.DateTime.fromObject({hour: 19})
        expect(actual.hour).toEqual(expected.hour);
    });

    test('converts 7:00 AM', () => {
        let actual = timeToLuxonConverter.convert('7:00 AM');
        let expected = Luxon.DateTime.fromObject({hour: 7})
        expect(actual.hour).toEqual(expected.hour);
    });

    test('converts 7:00 PM', () => {
        let actual = timeToLuxonConverter.convert('7:00 PM');
        let expected = Luxon.DateTime.fromObject({hour: 19})
        expect(actual.hour).toEqual(expected.hour);
    });

    test('converts 0:00', () => {
        let actual = timeToLuxonConverter.convert('0:00');
        let expected = Luxon.DateTime.fromObject({hour: 0})
        expect(actual.hour).toEqual(expected.hour);
    });

    test('converts 12:00', () => {
        let actual = timeToLuxonConverter.convert('12:00');
        let expected = Luxon.DateTime.fromObject({hour: 12})
        expect(actual.hour).toEqual(expected.hour);
    });

    test('converts 12:00 PM', () => {
        let actual = timeToLuxonConverter.convert('12:00 PM');
        let expected = Luxon.DateTime.fromObject({hour: 12})
        expect(actual.hour).toEqual(expected.hour);
    });

    test('converts 12:00 AM', () => {
        let actual = timeToLuxonConverter.convert('12:00 AM');
        let expected = Luxon.DateTime.fromObject({hour: 0})
        expect(actual.hour).toEqual(expected.hour);
    });
});

describe('half hour conversion', () => {
    test('converts 7:30PM', () => {
        let actual = timeToLuxonConverter.convert('7:30PM');
        let expected = Luxon.DateTime.fromObject({hour: 19, minute: 30})
        expect(actual.hour).toEqual(expected.hour);
    });

    test('converts 7:30pm', () => {
        let actual = timeToLuxonConverter.convert('7:30pm');
        let expected = Luxon.DateTime.fromObject({hour: 19, minute: 30})
        expect(actual.hour).toEqual(expected.hour);
    });

    test('converts 7:30am', () => {
        let actual = timeToLuxonConverter.convert('7:30am');
        let expected = Luxon.DateTime.fromObject({hour: 7, minute: 30})
        expect(actual.hour).toEqual(expected.hour);
    });

    test('converts 7:30AM', () => {
        let actual = timeToLuxonConverter.convert('7:30AM');
        let expected = Luxon.DateTime.fromObject({hour: 7, minute: 30})
        expect(actual.hour).toEqual(expected.hour);
    });

    test('converts 7:30 AM', () => {
        let actual = timeToLuxonConverter.convert('7:30 AM');
        let expected = Luxon.DateTime.fromObject({hour: 7, minute: 30})
        expect(actual.hour).toEqual(expected.hour);
    });

    test('converts 7:30 PM', () => {
        let actual = timeToLuxonConverter.convert('7:30 PM');
        let expected = Luxon.DateTime.fromObject({hour: 19, minute: 30})
        expect(actual.hour).toEqual(expected.hour);
    });

    test('converts 7:30 AM', () => {
        let actual = timeToLuxonConverter.convert('7:30 AM');
        let expected = Luxon.DateTime.fromObject({hour: 7, minute: 30})
        expect(actual.hour).toEqual(expected.hour);
    });

    test('converts 7:30 PM', () => {
        let actual = timeToLuxonConverter.convert('7:30 PM');
        let expected = Luxon.DateTime.fromObject({hour: 19, minute: 30})
        expect(actual.hour).toEqual(expected.hour);
    });

    test('converts 0:30', () => {
        let actual = timeToLuxonConverter.convert('0:30');
        let expected = Luxon.DateTime.fromObject({hour: 0, minute: 30})
        expect(actual.hour).toEqual(expected.hour);
    });

    test('converts 12:30', () => {
        let actual = timeToLuxonConverter.convert('12:30');
        let expected = Luxon.DateTime.fromObject({hour: 12, minute: 30})
        expect(actual.hour).toEqual(expected.hour);
    });

    test('converts 12:30 PM', () => {
        let actual = timeToLuxonConverter.convert('12:30 PM');
        let expected = Luxon.DateTime.fromObject({hour: 12, minute: 30})
        expect(actual.hour).toEqual(expected.hour);
    });

    test('converts 12:30 AM', () => {
        let actual = timeToLuxonConverter.convert('12:30 AM');
        let expected = Luxon.DateTime.fromObject({hour: 0, minute: 30})
        expect(actual.hour).toEqual(expected.hour);
    });
});

describe('errors', () => {
    test('converting an invalid time should return undefined', () => {
        expect(timeToLuxonConverter.convert('9')).toBeUndefined();
    });

    test('converting an time with short minute length should return undefined', () => {
        let actual = timeToLuxonConverter.convert('9:3 PM');
        let expected = Luxon.DateTime.fromObject({hour: 21, minute: 3})

        expect(actual.hour).toEqual(expected.hour);
        expect(actual.minute).toEqual(expected.minute);;
    });

    test('converting an time with invalid minute length should return undefined', () => {
        let actual = timeToLuxonConverter.convert('9:3');
        let expected = Luxon.DateTime.fromObject({hour: 9, minute: 0})

        expect(actual.hour).toEqual(expected.hour);
        expect(actual.minute).toEqual(expected.minute);
    });
});