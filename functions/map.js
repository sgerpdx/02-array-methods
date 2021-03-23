const arrayMap = (array, callback) => {
  let arrNew = [...array];
  for (let index = 0; index < arrNew.length; index++) {
    arrNew[index] = callback(arrNew[index]);
  }
  return arrNew;
};

module.exports = arrayMap;
