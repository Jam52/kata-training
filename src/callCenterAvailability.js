var dayjs = require('dayjs');
var isBetween = require('dayjs/plugin/isBetween');
dayjs.extend(isBetween);

export class CallCenter {
  constructor(requestedAppointment, dateUserMadeContact) {
    this.requestedAppointment = dayjs(requestedAppointment);
    this.dateUserMadeContact = dayjs(dateUserMadeContact);
  }

  getRequestedAppointment = () => {
    return this.requestedAppointment;
  };

  getDateUserMadeContact = () => {
    return this.dateUserMadeContact;
  };

  getDayStart = (date) => {
    const nineAm = dayjs(`${date.format('YYYY-MM-DD')}T09:00:00.000Z`);
    return nineAm;
  };

  getDayEnd = (date) => {
    const eightPm = dayjs(`${date.format('YYYY-MM-DD')}T20:00:00.000Z`);
    return eightPm;
  };

  isValidAppointment = () => {
    if (this.requestedAppointment.format('ddd') === 'Sun') {
      return false;
    }
    const daysDiff = this.requestedAppointment.diff(
      this.getDateUserMadeContact(),
      'day',
    );
    const secondsDiff = this.requestedAppointment.diff(
      this.getDateUserMadeContact(),
      'second',
    );
    if (daysDiff > 7) {
      return false;
    }
    if (secondsDiff < 0) {
      return false;
    }
    if (
      !this.requestedAppointment.isBetween(
        this.getDayStart(this.requestedAppointment),
        this.getDayEnd(this.requestedAppointment),
        'second',
      )
    ) {
      return false;
    }
    if (this.requestedAppointment.isSame(this.dateUserMadeContact, 'day')) {
      console.log('same day');
      if (
        this.requestedAppointment.diff(this.dateUserMadeContact, 'second') <
        7200
      ) {
        return false;
      }
    }
    return true;
  };
}
