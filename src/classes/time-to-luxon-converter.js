import { DateTime } from 'luxon';

class TimeToLuxonConverter {
  convert(time) {
    if (time.length < 2) {
      return undefined;
    }

    const hasMinutes = this._hasMinutes(time);
    const hasPM = this._hasPM(time);
    const hasAM = this._hasAM(time);

    let hour = time.substring(0, 2);
    const secondCharacter = time.substring(1, 2);
    if (Number.isNaN(secondCharacter)) {
      hour = hour.substring(0, 1);
    }

    const hourIn24Hour = this._24Hours(hour, hasAM, hasPM);

    let minutes = 0;
    if (hasMinutes) {
      minutes = this._getMinutes(time);
    }

    return DateTime.fromObject({
      hour: hourIn24Hour,
      minute: minutes,
    });
  }

  _hasPM(time) {
    return time.toLowerCase().indexOf('pm') !== -1;
  }

  _hasAM(time) {
    return time.toLowerCase().indexOf('am') !== -1;
  }

  _hasMinutes(time) {
    return time.indexOf(':') !== -1;
  }

  _24Hours(hour, hasAM, hasPM) {
    if (hasPM === true) {
      const integerHour = parseInt(hour);

      return integerHour === 12 ? 12 : integerHour + 12;
    }
    if (hasAM === true && hour === '12') {
      return 0;
    }
    return parseInt(hour);
  }

  _getMinutes(time) {
    const timeComponents = time.split(':');

    const minutesComponent = timeComponents[1];
    if (minutesComponent.length < 2) {
      return undefined;
    }

    return parseInt(minutesComponent.substring(0, 2));
  }
}

export default TimeToLuxonConverter;
