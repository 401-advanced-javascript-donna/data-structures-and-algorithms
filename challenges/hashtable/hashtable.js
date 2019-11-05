const DEFAULT_HASH = size => key => key
  .split('')
  .reduce((acc, letter, i) =>
    acc += letter.charCodeAt(0) + i, 0)
  % size;

class HashTable {
  constructor(bucket = 99, hashAlgorithm = DEFAULT_HASH) {
    this.array = new Array(bucket).fill([]);
    this.hashAlgorithm = hashAlgorithm(bucket);
  }

  hash(key) {
    return this.hashAlgorithm(key);
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.array[index];
    if(bucket.length > 0) {
      for(let i = 0; i < bucket.length; i++) {
        return (bucket[i][0] === key) ? bucket[i][1] : null;
      }
    }
    else return null;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.array[index];
    const existingIndex = bucket.find(([storedKey]) => storedKey === key);
    return (existingIndex) ? bucket[existingIndex][1] = value : bucket.push([key, value]);
  }

  contains(key) {
    const index = this.hash(key);
    const bucket = this.array[index];
    const existingIndex = bucket.find(([storedKey]) => storedKey === key);
    return (existingIndex) ? true : false;
  }
}

module.exports = HashTable;