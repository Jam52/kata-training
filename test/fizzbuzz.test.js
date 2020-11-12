import { FizzBuzz } from '../src/fizzbuzz';

describe('Fizzbuzz', () => {
    let fizzbuzz;
    beforeEach(() => {
        fizzbuzz = new FizzBuzz();
    })

    test('FizzBuzz to be instantiated', () => {
        expect(fizzbuzz).toBeInstanceOf(FizzBuzz)
    })

    test('returns a number', () => {
        expect(fizzbuzz.returnANumber()).toBe(1)
    })
})

