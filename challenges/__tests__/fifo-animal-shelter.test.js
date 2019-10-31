const { AnimalShelter } = require('../fifoAnimalShelter/fifo-animal-shelter');

describe('animal shelter', () => {

  const animal = new AnimalShelter();

  it('returns in the front', () => {

    animal.enqueue('cat');
    animal.enqueue('cat');
    animal.enqueue('dog');
    animal.enqueue('cat');
    animal.enqueue('dog');

    const firstCat = animal.dequeue('cat');
    expect(firstCat).toBe('cat');
    expect(animal.front.data).toBe('cat');
    expect(animal.front.next.data).toBe('dog');
  });

  it('returns pref in the middle', () => {

    const firstDog = animal.dequeue('dog');
    expect(firstDog).toBe('dog');
    expect(animal.front.next.data).toBe('cat');

  });

  it('returns front when no pref', () => {

    expect(animal.dequeue()).toBe('cat');
    expect(animal.dequeue()).toBe('cat');
    expect(animal.dequeue()).toBe('dog');
  });

  it('returns null on invalid input', () => {
    expect(animal.dequeue('rabbit')).toBeNull();
  });


});