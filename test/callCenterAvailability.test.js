import { CallCenter } from '../src/callCenterAvailability';
var dayjs = require('dayjs');

const dateUserMadeContact = '2020-12-20';
const requestedAppointment = '2020-12-20';

test('returns input dates of requested appointment and date user made contact', () => {
  const callCenter = new CallCenter(requestedAppointment, dateUserMadeContact);
  expect(callCenter.getRequestedAppointment()).toEqual(
    dayjs(requestedAppointment),
  );
  expect(callCenter.getDateUserMadeContact()).toEqual(
    dayjs(dateUserMadeContact),
  );
});

test('returns false if appointment is 8+ days', () => {
  const requestedAppointmentPlusEightDays = dayjs(requestedAppointment).add(
    8,
    'days',
  );
  const callCenter = new CallCenter(
    requestedAppointmentPlusEightDays,
    dateUserMadeContact,
  );
  expect(callCenter.isValidAppointment()).toBe(false);
});

test('returns false if appointment is in the past', () => {
  const requestedAppointmentMinusOneDay = dayjs(requestedAppointment).subtract(
    1,
    'day',
  );
  const callCenter = new CallCenter(
    requestedAppointmentMinusOneDay,
    dateUserMadeContact,
  );
  expect(callCenter.isValidAppointment()).toBe(false);
});

test('returns false if day is a sunday', () => {
  const requestedAppointment = '2020-12-27';
  const callCenter = new CallCenter(requestedAppointment, dateUserMadeContact);
  expect(callCenter.isValidAppointment()).toBe(false);
});
