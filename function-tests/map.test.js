const arrayMap = require('../functions/map');

describe('array mapping function', () => {
  it('returns a new array with each item altered', () => {
    const oldArray = ['Bret', 'Jemaine', 'Murray'];
    const recordPresent = (i) => `${i} is present`;

    const newArray = [
      'Bret is present',
      'Jemaine is present',
      'Murray is present',
    ];

    expect(arrayMap(oldArray, recordPresent)).toEqual(newArray);
  });
});

// describe('', () => {
//     it('', () => {

//       expect('').toEqual('');
//     });
//   });
