const arrayReduce = require('../functions/reduce');

describe.skip('array-reducing function', () => {
  it('', () => {
    const oldArray = [4, 4, 4, 4];
    const sumDown = (accSum, i) => {
      accSum = accSum + i;
    };

    const arraySum = 16;
    expect(arrayReduce(oldArray, sumDown)).toEqual(arraySum);
  });
});
