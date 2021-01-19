import { CallCenter } from '../src/callCenterAvailability';
var dayjs = require('dayjs');

const dateUserMadeContact = '2020-12-23T12:00:00.000Z';
const requestedAppointment = '2020-12-23T15:00:00.000Z';

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

const providerData = [
  {
    time: '2020-12-23T20:10:00.000Z',
    description: 'returns false if outside of max hours',
    expectedResult: false,
  },
  {
    time: '2020-12-23T19:10:00.000Z',
    description: 'returns true if inside of max hours',
    expectedResult: true,
  },
  {
    time: '2020-12-23T13:00:00.000Z',
    description: 'returns false if todays date, and less than 2 hours',
    expectedResult: false,
  },
  {
    time: '2020-12-23T16:00:00.000Z',
    description: 'returns true if todays date, and more than 2 hours',
    expectedResult: true,
  },
];

describe.each(providerData)('when passed a time', (appointment) => {
  test(`${appointment.description}`, () => {
    const requestedAppointment = appointment.time;
    const callCenter = new CallCenter(
      requestedAppointment,
      dateUserMadeContact,
    );
    expect(callCenter.isValidAppointment()).toBe(appointment.expectedResult);
  });
});
