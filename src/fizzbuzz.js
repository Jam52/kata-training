export class FizzBuzz {
  constructor() {}

  returnANumber = (num) => {
    const isNum = parseInt(num);
    if (num === null || isNaN(isNum)) {
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
    return isNum;
  };
}
