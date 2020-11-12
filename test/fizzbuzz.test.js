import { FizzBuzz } from '../src/fizzbuzz';

describe('Fizzbuzz', () => {
  let fizzbuzz;
  beforeEach(() => {
    fizzbuzz = new FizzBuzz();
  });

  test('FizzBuzz to be instantiated', () => {
    expect(fizzbuzz).toBeInstanceOf(FizzBuzz);
  });

  const data = [
    {
      num: 2,
      result: 2,
    },
    {
      num: 3,
      result: 'Fizz',
    },
    {
      num: 5,
      result: 'Buzz',
    },
    {
      num: 9,
      result: 'Fizz',
    },
    {
      num: 10,
      result: 'Buzz',
    },
  ];

  describe.each(data)('Fizzbuzz', (num) => {
    test(`returns ${num.result} when given ${num.num}`, () => {
      expect(fizzbuzz.returnANumber(num.num)).toBe(num.result);
    });
  });
});
