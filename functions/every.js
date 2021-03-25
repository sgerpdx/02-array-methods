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

// 5. every(arr, callback)
// Takes an Array and callback of signature item => {} and returns an overall true value if all callback return true or a truthy value.

// Any holes in the Array should be skipped (don't call the callback function).

// Returns the true if every item in the Array has returned true, otherwise false.
