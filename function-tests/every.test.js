const arrayEvery = require('../functions/every');

describe('function to determine if every item in array meets a criterion', () => {
  it('returns true if every item in an array is an even integer', () => {
    const targetArray = [4, 6, 12, 8, 16];
    const testForEven = (i) => {
      if (i % 2 === 0) {
        return true;
      }
    };
    const expected = true;
    expect(arrayEvery(targetArray, testForEven)).toEqual(expected);
  });
});
