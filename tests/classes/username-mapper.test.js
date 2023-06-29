import UsernameMapper from '../../src/classes/username-mapper.js';
import Region from '../../src/models/region.js';

describe('Username mapper', () => {
  test('Maps Gerson correctly', () => {
    expect(UsernameMapper.map(UsernameMapper.gerson)).toEqual(Region.ESTONIA);
  });

  test('Maps Jose correctly', () => {
    expect(UsernameMapper.map(UsernameMapper.jaje)).toEqual(Region.UK);
  });

  test('Maps Muerto correctly', () => {
    expect(UsernameMapper.map(UsernameMapper.muerto)).toEqual(Region.CANADA);
  });

  test('Maps Wilson correctly', () => {
    expect(UsernameMapper.map(UsernameMapper.wilson)).toEqual(Region.NY);
  });

  test('Maps others correctly', () => {
    expect(UsernameMapper.map('wolfie26')).toEqual(Region.ECUADOR);
  });
});
