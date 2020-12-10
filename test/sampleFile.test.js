import { CallCenter } from '../src/callCenterAvailability';

test('just checking', () => {
  const sampleFile = new CallCenter();
  expect(sampleFile.sampleFunction()).toBe(1);
});
