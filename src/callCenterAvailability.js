var dayjs = require('dayjs');

export class CallCenter {
  constructor(requestedAppointment) {
    this.requestedAppointment = dayjs(requestedAppointment);
  }

  getCurrentDate = () => {
    return dayjs();
  };

  getRequestedAppointment = () => {
    return this.requestedAppointment;
  };

  isValidAppointment = () => {
    const dateDiff = this.requestedAppointment.diff(
      this.getCurrentDate(),
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
