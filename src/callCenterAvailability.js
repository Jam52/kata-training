var dayjs = require('dayjs');

export class CallCenter {
  constructor() {}

  inputDateCalled = (date) => {
    return dayjs(date).format('YYYY-MM-DD');
  };
}
