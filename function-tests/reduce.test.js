const arrayReduce = require('../functions/reduce');

describe('array-reducing function', () => {
  it('', () => {
    const oldArray = [4, 4, 4, 4];
    const sumDown = (accSum, item, index) => {
      if (index % 2 === 0) accSum += item;
      return accSum;
    };

    const arraySum = 8;
    expect(arrayReduce(oldArray, sumDown, 0)).toEqual(arraySum);
  });
});
