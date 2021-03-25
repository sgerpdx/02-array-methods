const arrayFindIndex = (array, callback) => {
  let targetItem;
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index])) {
      targetItem = array[index];
      break;
    }
    return targetItem;
  }
};

module.exports = arrayFindIndex;
