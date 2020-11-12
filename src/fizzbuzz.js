export class FizzBuzz {
  constructor() {}

  returnANumber = (num) => {
    let fizzbuzz = num;
    if (num === 3) {
      fizzbuzz = 'Fizz';
    }
    if (num === 5) {
      fizzbuzz = 'Buzz';
    }
    return fizzbuzz;
  };
}
