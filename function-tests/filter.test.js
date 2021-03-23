const arrayFilter = require('../functions/filter');

describe('', () => {
  it('', () => {
    const oldArray = [5, 6, 7, 8, 9];
    const testForOdd = (i) => i % 2 !== 0;

    const newArray = [5, 7, 9];

    expect(arrayFilter(oldArray, testForOdd)).toEqual(newArray);
  });
});
