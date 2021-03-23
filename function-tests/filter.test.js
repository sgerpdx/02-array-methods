const arrayFilter = require('../functions/filter');

describe('array-filtering function', () => {
  it('takes in an integer array and returns a new array with only the odd integers', () => {
    const oldArray = [5, 6, 7, 8, 9];
    const testForOdd = (i) => {
      if (i % 2 !== 0) {
        return i;
      }
    };
    const newArray = [5, 7, 9];
    expect(arrayFilter(oldArray, testForOdd)).toEqual(newArray);
  });

  it('takes in an array of strings and returns only the strings containing the letter z', () => {
    const oldArray = ['earth', 'mezzanine', 'birch', 'zine', 'robin'];
    const onlyZ = (string) => {
      if (string.includes('z')) {
        return string;
      }
    };
    const newArray = ['mezzanine', 'zine'];
    expect(arrayFilter(oldArray, onlyZ)).toEqual(newArray);
  });
});
