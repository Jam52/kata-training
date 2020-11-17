export class FizzBuzz {
  constructor() {}

  returnANumber = (num) => {
    if (num === null) {
      return new Error();
    }
    if (num % 5 === 0 && num % 3 === 0) {
      return 'FizzBuzz';
    }
    if (num % 3 === 0) {
      return 'Fizz';
    }
    if (num % 5 === 0) {
      return 'Buzz';
    }

    return num;
  };
}
