const arrayReduce = require('../functions/reduce');

describe.skip('array-reducing function', () => {
  it('', () => {
    const oldArray = [];
    const someCallback = () => {};

    const newArray = [5, 7, 9];

    expect(arrayReduce(oldArray, someCallback)).toEqual(newArray);
  });
});
