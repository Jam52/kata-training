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
    return this.getCurrentDate().diff(this.requestedAppointment) > 7;
  };
}
