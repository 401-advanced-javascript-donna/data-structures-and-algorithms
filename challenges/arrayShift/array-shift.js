const insertShiftArray = (arr, val) => {
  for(let i = arr.length - 1; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }
  arr[0] = val;
  return arr;
}

module.exports = insertShiftArray;