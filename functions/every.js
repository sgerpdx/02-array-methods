const arrayEvery = (array, callback) => {
  let verdict = true;
  for (let index = 0; index < array.length; index++) {
    if (!callback(array[index])) {
      verdict = false;
    }
  }
  return verdict;
};

module.exports = arrayEvery;
