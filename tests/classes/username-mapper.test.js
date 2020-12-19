const UsernameMapper = require('../../src/classes/username-mapper');
const regions = require('../../src/models/region');

describe('Username mapper', () => {
  test('Maps Gerson correctly', () => {
    expect(UsernameMapper.map('Gerson')).toEqual(regions.ESTONIA);
  });

  test('Maps Jose correctly', () => {
    expect(UsernameMapper.map('JoseJarrin91')).toEqual(regions.UK);
  });

  test('Maps others correctly', () => {
    expect(UsernameMapper.map('Hario0')).toEqual(regions.ECUADOR);
  });
});
