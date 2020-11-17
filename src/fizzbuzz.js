export class FizzBuzz {
  constructor() {}

  returnANumber = (num) => {
    let fizzbuzz = num;
    if (num % 3 === 0) {
      fizzbuzz = 'Fizz';
    }
    if (num % 5 === 0) {
      fizzbuzz = 'Buzz';
    }
    if (num % 5 === 0 && num % 3 === 0) {
      fizzbuzz = 'FizzBuzz';
    }
    return fizzbuzz;
  };
}
