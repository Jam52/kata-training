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
      !this.requestedAppointment.isBetween('09:00:00', '20:00:00', 'second')
    ) {
      return false;
    }
    return true;
  };
}
