import { CallCenter } from '../src/callCenterAvailability';
var dayjs = require('dayjs');

const dateUserMadeContact = '2020-12-23T12:00:00.000Z';
const requestedAppointment = '2020-12-23T15:00:00.000Z';

const mockOpeningHours = {
  mon: {
    openTime: '09:00:00.000',
    closeTime: '18:00:00.000',
  },
  tue: {
    openTime: '09:00:00.000',
    closeTime: '18:00:00.000',
  },
  wed: {
    openTime: '09:00:00.000',
    closeTime: '18:00:00.000',
  },
  thu: {
    openTime: '09:00:00.000',
    closeTime: '20:00:00.000',
  },
  fri: {
    openTime: '09:00:00.000',
    closeTime: '20:00:00.000',
  },
  sat: {
    openTime: '09:00:00.000',
    closeTime: '12:30:00.000',
  },
  sun: {
    openTime: '',
    closeTime: '',
  },
};

test('returns input dates of requested appointment and date user made contact', () => {
  const callCenter = new CallCenter(
    requestedAppointment,
    dateUserMadeContact,
    mockOpeningHours,
  );
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
    mockOpeningHours,
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
    mockOpeningHours,
  );
  expect(callCenter.isValidAppointment()).toBe(false);
});

test('returns false if day is a sunday', () => {
  const requestedAppointment = '2020-12-27';
  const callCenter = new CallCenter(
    requestedAppointment,
    dateUserMadeContact,
    mockOpeningHours,
  );
  expect(callCenter.isValidAppointment()).toBe(false);
});

const openingHoursProvider = [
  {
    time: '2020-12-28T08:59:59.000Z',
    description: 'returns false if outside mon-sat opening time hours',
    expectedResult: false,
  },
  {
    time: '2020-12-28T09:01:01.000Z',
    description: 'returns true if inside mon-sat opening time hours',
    expectedResult: true,
  },
  {
    time: '2020-12-28T18:01:01.000Z',
    description: 'returns false if outside mon-wed closing time hours',
    expectedResult: false,
  },
  {
    time: '2020-12-28T17:59:59.000Z',
    description: 'returns true if inside mon-wed closing time hours',
    expectedResult: true,
  },
  {
    time: '2020-12-24T20:01:01.000Z',
    description: 'returns false if outside thur-fri closing time hours',
    expectedResult: false,
  },
  {
    time: '2020-12-24T19:59:59.000Z',
    description: 'returns true if inside thur-fri closing time hours',
    expectedResult: true,
  },
  {
    time: '2020-12-26T12:30:01.000Z',
    description: 'returns false if outside sat closing time hours',
    expectedResult: false,
  },
  {
    time: '2020-12-26T12:29:59.000Z',
    description: 'returns true if inside sat closing time hours',
    expectedResult: true,
  },
];

describe.each(openingHoursProvider)(
  'when checking for time outside of opening hours',
  (appointment) => {
    test(`${appointment.description}`, () => {
      const callCenter = new CallCenter(
        appointment.time,
        dateUserMadeContact,
        mockOpeningHours,
      );
      expect(callCenter.isValidAppointment()).toBe(appointment.expectedResult);
    });
  },
);
