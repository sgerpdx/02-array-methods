const arrayReduce = (array, callback) => {
  // let arrNew = [];
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    array[index] = callback(sum, array[index]);
  }

  return sum;
};

module.exports = arrayReduce;
