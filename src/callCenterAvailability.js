var dayjs = require('dayjs');
var isBetween = require('dayjs/plugin/isBetween');
dayjs.extend(isBetween);

export class CallCenter {
  constructor(requestedAppointment, dateUserMadeContact, openingHours) {
    this.requestedAppointment = dayjs(requestedAppointment);
    this.dateUserMadeContact = dayjs(dateUserMadeContact);
    this.openingHours = openingHours;
  }

  getRequestedAppointment = () => {
    return this.requestedAppointment;
  };

  getDateUserMadeContact = () => {
    return this.dateUserMadeContact;
  };

  getDayStart = (date) => {
    let currentDay = date.format('ddd');
    const openingTime = dayjs(
      `${date.format('YYYY-MM-DD')}T${
        this.openingHours[currentDay.toLowerCase()].openTime
      }Z`,
    );
    return openingTime;
  };

  getDayEnd = (date) => {
    let currentDay = date.format('ddd');
    const closingTime = dayjs(
      `${date.format('YYYY-MM-DD')}T${
        this.openingHours[currentDay.toLowerCase()].closeTime
      }Z`,
    );
    return closingTime;
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
