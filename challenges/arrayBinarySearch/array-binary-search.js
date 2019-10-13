function binarySearch(arr, search) {
  let start = 0; 
  let end = arr.length - 1;
  while(start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log(mid);
    if(search === arr[mid]) {
      return mid;
    } else if(search < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
module.exports = binarySearch;
