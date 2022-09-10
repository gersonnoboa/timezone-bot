import UsernameMapper from '../../src/classes/username-mapper.js';
import Region from '../../src/models/region.js';

describe('Username mapper', () => {
  test('Maps Gerson correctly', () => {
    expect(UsernameMapper.map('Gerson')).toEqual(Region.ESTONIA);
  });

  test('Maps Jose correctly', () => {
    expect(UsernameMapper.map('JoseJarrin91')).toEqual(Region.UK);
  });

  test('Maps Muerto correctly', () => {
    expect(UsernameMapper.map('RayBryceEU')).toEqual(Region.CANADA);
  });

  test('Maps Wilson correctly', () => {
    expect(UsernameMapper.map('Hario')).toEqual(Region.NY);
  });

  test('Maps others correctly', () => {
    expect(UsernameMapper.map('wolfie26')).toEqual(Region.ECUADOR);
  });
});
