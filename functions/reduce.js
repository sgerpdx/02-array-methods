const arrayReduce = (array, callback, acc) => {
  // let arrNew = [];
  for (let index = 0; index < array.length; index++) {
    acc = callback(acc, array[index], index);
  }

  return acc;
};

module.exports = arrayReduce;
