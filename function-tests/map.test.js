const arrayMap = require('../functions/map');

describe('array mapping function', () => {
  it('returns a new string array by appending', () => {
    const oldArray = ['Bret', 'Jemaine', 'Murray'];
    const recordPresent = (i) => `${i} is present`;

    const newArray = [
      'Bret is present',
      'Jemaine is present',
      'Murray is present',
    ];

    expect(arrayMap(oldArray, recordPresent)).toEqual(newArray);
  });

  it('returns a new integer array by dividing in half', () => {
    const oldArray = [2, 4, 6];
    const recordPresent = (i) => i / 2;

    const newArray = [1, 2, 3];

    expect(arrayMap(oldArray, recordPresent)).toEqual(newArray);
  });
});

// describe('', () => {
//     it('', () => {

//       expect('').toEqual('');
//     });
//   });
