import Region from '../../src/models/region.js';
import RegionMapper from '../../src/classes/region-mapper.js';

describe('Region mapper', () => {
  test('Estonia', () => {
    expect(RegionMapper.map(Region.ESTONIA)).toEqual('Europe/Tallinn');
  });

  test('UK', () => {
    expect(RegionMapper.map(Region.UK)).toEqual('Europe/London');
  });

  test('Ecuador', () => {
    expect(RegionMapper.map(Region.ECUADOR)).toEqual('America/Guayaquil');
  });

  test('Canada', () => {
    expect(RegionMapper.map(Region.CANADA)).toEqual('America/Halifax');
  });

  test('NY', () => {
    expect(RegionMapper.map(Region.NY)).toEqual('America/New_York');
  });

  test('Other', () => {
    expect(RegionMapper.map('')).toEqual('UTC');
  });
});
