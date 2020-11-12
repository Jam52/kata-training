export class FizzBuzz {
  constructor() {}

  returnANumber = (num) => {
    let fizzbuzz = num;
    if (num === 3) {
      fizzbuzz = 'Fizz';
    }
    return fizzbuzz;
  };
}
