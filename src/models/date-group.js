const { DateTime } = require('luxon');

class DateGroup {
  constructor(originalDate, additionalDates) {
    this.originalDate = originalDate;
    this.additionalDates = additionalDates;
  }

  toStrings() {
    const strings = [];
    strings.push(
      `${this.originalDate.date.toLocaleString(DateTime.TIME_SIMPLE)} en $
      {this.originalDate.region}`
    );

    for (let index = 0; index < this.additionalDates.length; index += 1) {
      const additionalDate = this.additionalDates[index];
      const time = additionalDate.date.toLocaleString(DateTime.TIME_SIMPLE);
      const { region } = additionalDate;
      strings.push(`${time} en ${region}`);
    }

    return strings;
  }
}

module.exports = DateGroup;
