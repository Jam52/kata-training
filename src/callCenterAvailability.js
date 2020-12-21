var dayjs = require('dayjs');

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
    const dateDiff = this.requestedAppointment.diff(
      this.getDateUserMadeContact(),
      'day',
    );
    if (dateDiff > 7) {
      return false;
    }
    if (dateDiff < 0) {
      return false;
    }

    return true;
  };
}
