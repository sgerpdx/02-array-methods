const arrayFindIndex = (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index])) {
      return array[index];
      break;
    } else {
    }
  }
  return arrNew;
};

module.exports = arrayFindIndex;
