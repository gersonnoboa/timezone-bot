const Luxon = require('luxon');
const TimeToLuxonConverter = require('../../src/classes/time-to-luxon-converter');

const timeToLuxonConverter = new TimeToLuxonConverter();

describe('hour only conversion', () => {
  test('converts 7PM', () => {
    const actual = timeToLuxonConverter.convert('7PM');
    const expected = Luxon.DateTime.fromObject({ hour: 19 });
    expect(actual.hour).toEqual(expected.hour);
  });

  test('converts 7pm', () => {
    const actual = timeToLuxonConverter.convert('7pm');
    const expected = Luxon.DateTime.fromObject({ hour: 19 });
    expect(actual.hour).toEqual(expected.hour);
  });

  test('converts 7am', () => {
    const actual = timeToLuxonConverter.convert('7am');
    const expected = Luxon.DateTime.fromObject({ hour: 7 });
    expect(actual.hour).toEqual(expected.hour);
  });

  test('converts 7AM', () => {
    const actual = timeToLuxonConverter.convert('7AM');
    const expected = Luxon.DateTime.fromObject({ hour: 7 });
    expect(actual.hour).toEqual(expected.hour);
  });

  test('converts 7 AM', () => {
    const actual = timeToLuxonConverter.convert('7 AM');
    const expected = Luxon.DateTime.fromObject({ hour: 7 });
    expect(actual.hour).toEqual(expected.hour);
  });

  test('converts 7 PM', () => {
    const actual = timeToLuxonConverter.convert('7 PM');
    const expected = Luxon.DateTime.fromObject({ hour: 19 });
    expect(actual.hour).toEqual(expected.hour);
  });

  test('converts 7:00 AM', () => {
    const actual = timeToLuxonConverter.convert('7:00 AM');
    const expected = Luxon.DateTime.fromObject({ hour: 7 });
    expect(actual.hour).toEqual(expected.hour);
  });

  test('converts 7:00 PM', () => {
    const actual = timeToLuxonConverter.convert('7:00 PM');
    const expected = Luxon.DateTime.fromObject({ hour: 19 });
    expect(actual.hour).toEqual(expected.hour);
  });

  test('converts 0:00', () => {
    const actual = timeToLuxonConverter.convert('0:00');
    const expected = Luxon.DateTime.fromObject({ hour: 0 });
    expect(actual.hour).toEqual(expected.hour);
  });

  test('converts 12:00', () => {
    const actual = timeToLuxonConverter.convert('12:00');
    const expected = Luxon.DateTime.fromObject({ hour: 12 });
    expect(actual.hour).toEqual(expected.hour);
  });

  test('converts 12:00 PM', () => {
    const actual = timeToLuxonConverter.convert('12:00 PM');
    const expected = Luxon.DateTime.fromObject({ hour: 12 });
    expect(actual.hour).toEqual(expected.hour);
  });

  test('converts 12:00 AM', () => {
    const actual = timeToLuxonConverter.convert('12:00 AM');
    const expected = Luxon.DateTime.fromObject({ hour: 0 });
    expect(actual.hour).toEqual(expected.hour);
  });
});

describe('half hour conversion', () => {
  test('converts 7:30PM', () => {
    const actual = timeToLuxonConverter.convert('7:30PM');
    const expected = Luxon.DateTime.fromObject({ hour: 19, minute: 30 });
    expect(actual.hour).toEqual(expected.hour);
  });

  test('converts 7:30pm', () => {
    const actual = timeToLuxonConverter.convert('7:30pm');
    const expected = Luxon.DateTime.fromObject({ hour: 19, minute: 30 });
    expect(actual.hour).toEqual(expected.hour);
  });

  test('converts 7:30am', () => {
    const actual = timeToLuxonConverter.convert('7:30am');
    const expected = Luxon.DateTime.fromObject({ hour: 7, minute: 30 });
    expect(actual.hour).toEqual(expected.hour);
  });

  test('converts 7:30AM', () => {
    const actual = timeToLuxonConverter.convert('7:30AM');
    const expected = Luxon.DateTime.fromObject({ hour: 7, minute: 30 });
    expect(actual.hour).toEqual(expected.hour);
  });

  test('converts 7:30 AM', () => {
    const actual = timeToLuxonConverter.convert('7:30 AM');
    const expected = Luxon.DateTime.fromObject({ hour: 7, minute: 30 });
    expect(actual.hour).toEqual(expected.hour);
  });

  test('converts 7:30 PM', () => {
    const actual = timeToLuxonConverter.convert('7:30 PM');
    const expected = Luxon.DateTime.fromObject({ hour: 19, minute: 30 });
    expect(actual.hour).toEqual(expected.hour);
  });

  test('converts 7:30 AM', () => {
    const actual = timeToLuxonConverter.convert('7:30 AM');
    const expected = Luxon.DateTime.fromObject({ hour: 7, minute: 30 });
    expect(actual.hour).toEqual(expected.hour);
  });

  test('converts 7:30 PM', () => {
    const actual = timeToLuxonConverter.convert('7:30 PM');
    const expected = Luxon.DateTime.fromObject({ hour: 19, minute: 30 });
    expect(actual.hour).toEqual(expected.hour);
  });

  test('converts 0:30', () => {
    const actual = timeToLuxonConverter.convert('0:30');
    const expected = Luxon.DateTime.fromObject({ hour: 0, minute: 30 });
    expect(actual.hour).toEqual(expected.hour);
  });

  test('converts 12:30', () => {
    const actual = timeToLuxonConverter.convert('12:30');
    const expected = Luxon.DateTime.fromObject({ hour: 12, minute: 30 });
    expect(actual.hour).toEqual(expected.hour);
  });

  test('converts 12:30 PM', () => {
    const actual = timeToLuxonConverter.convert('12:30 PM');
    const expected = Luxon.DateTime.fromObject({ hour: 12, minute: 30 });
    expect(actual.hour).toEqual(expected.hour);
  });

  test('converts 12:30 AM', () => {
    const actual = timeToLuxonConverter.convert('12:30 AM');
    const expected = Luxon.DateTime.fromObject({ hour: 0, minute: 30 });
    expect(actual.hour).toEqual(expected.hour);
  });
});

describe('errors', () => {
  test('converting an invalid time should return undefined', () => {
    expect(timeToLuxonConverter.convert('9')).toBeUndefined();
  });

  test('converting an time with short minute length should return undefined', () => {
    const actual = timeToLuxonConverter.convert('9:3 PM');
    const expected = Luxon.DateTime.fromObject({ hour: 21, minute: 3 });

    expect(actual.hour).toEqual(expected.hour);
    expect(actual.minute).toEqual(expected.minute);
  });

  test('converting an time with invalid minute length should return undefined', () => {
    const actual = timeToLuxonConverter.convert('9:3');
    const expected = Luxon.DateTime.fromObject({ hour: 9, minute: 0 });

    expect(actual.hour).toEqual(expected.hour);
    expect(actual.minute).toEqual(expected.minute);
  });
});
