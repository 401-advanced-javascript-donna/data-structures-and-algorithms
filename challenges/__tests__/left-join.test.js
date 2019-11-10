const leftJoin = require('../leftJoin/left-join');

describe('left join', () => {
  it('should make left join on two hashmaps', () => {
    const synonym = {
      fond: 'enamored',
      wrath: 'anger',
      diligent: 'employed',
      outfit: 'garb',
      guide: 'usher',
    };
    const antonym = {
      fond: 'averse',
      wrath: 'delight',
      diligent: 'idle',
      guide: 'follow',
      flow: 'jam',
    };
    const result = [
      ['fond', 'enamored', 'averse'],
      ['wrath', 'anger', 'delight'],
      ['diligent', 'employed', 'idle'],
      ['outfit', 'garb', null],
      ['guide', 'usher', 'follow'],
    ];

    expect(leftJoin(synonym, antonym)).toEqual(result);
  });
});