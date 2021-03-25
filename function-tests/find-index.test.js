const arrayFindIndex = require('../functions/find-index');

describe('function to find array index', () => {
  it('returns the index of the item containing an even integer', () => {
    const oldArray = [5, 6, 7, 8, 9];
    const testForEven = (i) => {
      if (i % 2 === 0) {
        return true;
      }
    };

    const expected = 6;
    expect(arrayFindIndex(oldArray, testForEven)).toEqual();
  });
});
