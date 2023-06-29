import { DateTime } from 'luxon';
import TimezoneConverter from '../../src/classes/timezone-converter.js';
import Region from '../../src/models/region.js';

describe('Timezone converter', () => {
  describe('Hard timezone change', () => {
    test('Maps Estonian time correctly', () => {
      const date = TimezoneConverter.convertTimezoneHard(
        DateTime.utc(),
        Region.ESTONIA
      );

      expect(date.zoneName).toEqual('Europe/Tallinn');
    });

    test('Maps UK time correctly', () => {
      const date = TimezoneConverter.convertTimezoneHard(
        DateTime.utc(),
        Region.UK
      );

      expect(date.zoneName).toEqual('Europe/London');
    });

    test('Maps Ecuadorian time correctly', () => {
      const date = TimezoneConverter.convertTimezoneHard(
        DateTime.utc(),
        Region.ECUADOR
      );

      expect(date.zoneName).toEqual('America/Guayaquil');
    });

    test('Maps Canadian time correctly', () => {
      const date = TimezoneConverter.convertTimezoneHard(
        DateTime.utc(),
        Region.CANADA
      );

      expect(date.zoneName).toEqual('America/Halifax');
    });

    test('Maps US time correctly', () => {
      const date = TimezoneConverter.convertTimezoneHard(
        DateTime.utc(),
        Region.NY
      );

      expect(date.zoneName).toEqual('America/New_York');
    });
  });

  describe('Soft timezone change', () => {
    test('Maps Estonian time correctly', () => {
      const date = TimezoneConverter.convertTimezoneSoft(
        DateTime.utc(),
        Region.ESTONIA
      );

      expect(date.zoneName).toEqual('Europe/Tallinn');
    });

    test('Maps UK time correctly', () => {
      const date = TimezoneConverter.convertTimezoneSoft(
        DateTime.utc(),
        Region.UK
      );

      expect(date.zoneName).toEqual('Europe/London');
    });

    test('Maps Ecuadorian time correctly', () => {
      const date = TimezoneConverter.convertTimezoneSoft(
        DateTime.utc(),
        Region.ECUADOR
      );

      expect(date.zoneName).toEqual('America/Guayaquil');
    });

    test('Maps Canadian time correctly', () => {
      const date = TimezoneConverter.convertTimezoneSoft(
        DateTime.utc(),
        Region.CANADA
      );

      expect(date.zoneName).toEqual('America/Halifax');
    });

    test('Maps Ecuadorian time correctly', () => {
      const date = TimezoneConverter.convertTimezoneSoft(
        DateTime.utc(),
        Region.NY
      );

      expect(date.zoneName).toEqual('America/New_York');
    });
  });
});
