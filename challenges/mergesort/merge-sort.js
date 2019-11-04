const merge = (left, right, arr) => {
  let i = 0;
  let j = 0;
  let k = 0;

  while(i < left.length && j < right.length) {
    if(left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  if(i === left.length) {
    while(j < right.length) {
      arr[k] = right[j];
      k++;
      j++;
    }
  } else {
    while(i < left.length) {
      arr[k] = left[i];
      k++;
      i++;
    }
  }
  return arr;
};

const mergeSort = (arr) => {
  const n = arr.length;
  let result;

  if(n < 2) {
    return arr;
  } else {
    const mid = parseInt(n / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, n);
    mergeSort(left);
    mergeSort(right);
    result = merge(left, right, arr);
  }
  return result;
};

module.exports = mergeSort;