import { DateTime } from 'luxon';

class DateGroup {
  constructor(originalDate, additionalDates) {
    this.originalDate = originalDate;
    this.additionalDates = additionalDates;
  }

  toStrings() {
    const strings = [];
    const originalTime = this.originalDate.date.toLocaleString(
      DateTime.TIME_SIMPLE
    );
    const originalRegion = this.originalDate.region;
    strings.push(`${originalTime} en ${originalRegion}`);

    for (let index = 0; index < this.additionalDates.length; index += 1) {
      const additionalDate = this.additionalDates[index];
      const time = additionalDate.date.toLocaleString(DateTime.TIME_SIMPLE);
      const { region } = additionalDate;
      strings.push(`${time} en ${region}`);
    }

    return strings;
  }
}

export default DateGroup;
