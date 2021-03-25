const arrayFindIndex = (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index])) {
      return index;
    }
  }
  return -1;
};

module.exports = arrayFindIndex;
