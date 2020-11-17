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
      description: 'returns number given when not multiple of 3 or 5',
    },
    {
      num: 9,
      result: 'Fizz',
      description: 'returns Fizz when num given is multiple of 3',
    },
    {
      num: 10,
      result: 'Buzz',
      description: 'returns Buzz when num given is multiple of 5',
    },
    {
      num: 15,
      result: 'FizzBuzz',
      description: 'returns FizzBuzz when num given is multiple of 3 and 5',
    },
    {
      num: 2.2,
      result: 2.2,
      description: 'returns num given when num given is a float',
    },
  ];

  describe.each(data)('When passed a number', (num) => {
    test(`${num.description}`, () => {
      expect(fizzbuzz.returnANumber(num.num)).toBe(num.result);
    });
  });

  describe('When passed nan', () => {
    test('value given is null', () => {
      expect(fizzbuzz.returnANumber(null)).toEqual(new Error());
    });
    test('value given is a number as a string', () => {
      expect(fizzbuzz.returnANumber('2')).toBe(2);
    });
    test('value given is nan as a string', () => {
      expect(fizzbuzz.returnANumber('bambam')).toEqual(new Error());
    });
  });
});
