const arrayFilter = (array, callback) => {
  let arrNew = [];
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index])) {
      arrNew = [...arrNew, array[index]];
    }
    console.log(arrNew);
  }
  return arrNew;
};

module.exports = arrayFilter;
