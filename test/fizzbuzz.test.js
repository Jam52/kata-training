import { FizzBuzz } from '../src/fizzbuzz';

describe('Fizzbuzz', () => {
  let fizzbuzz;
  beforeEach(() => {
    fizzbuzz = new FizzBuzz();
  });

  test('FizzBuzz to be instantiated', () => {
    expect(fizzbuzz).toBeInstanceOf(FizzBuzz);
  });

  test('returns given number when it is not x3 or x5', () => {
    const num = 2;
    expect(fizzbuzz.returnANumber(num)).toBe(num);
  });

  test('returns fizz when argument is 3', () => {
    const num = 3;
    expect(fizzbuzz.returnANumber(num)).toBe('Fizz');
  });

  test('returns buzz when argument is 5', () => {
    const num = 5;
    expect(fizzbuzz.returnANumber(num)).toBe('Buzz');
  });
});
