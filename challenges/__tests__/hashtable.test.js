const HashTable = require('../hashtable/hashtable');


describe('Hash Table Tests', () => {
  it('should hash a key', () => {
    const hashTable = new HashTable();
    expect(hashTable.hash('spot')).toBe(64);
  });

  it('sets a key value pair', () => {
    const hashTable = new HashTable();
    hashTable.set('spot', 'freddie');
    expect(hashTable.get('spot')).toBe('freddie');
  });

  it('sets a key value pair when the key already exists', () => {
    const hashTable = new HashTable();
    hashTable.set('spot', 'freddie');
    expect(hashTable.get('spot')).toBe('freddie');
  });

  it('checks if a hash table contains a key', () => {
    const hashTable = new HashTable();
    hashTable.set('spot', 'freddie');
    expect(hashTable.contains('spot')).toBe(true);
    expect(hashTable.contains('chuck')).toBe(false);
  });
});
