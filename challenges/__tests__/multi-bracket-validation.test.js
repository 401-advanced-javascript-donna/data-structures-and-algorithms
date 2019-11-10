const { multiBracketValidation } = require('../multiBracketValidation/multi-bracket-validation');

describe('multi-bracket-validation', () => {
  it('will return true for balanced brackets and false for unbalanced brackets', () => {
    expect(multiBracketValidation('{}')).toBe(true);
    expect(multiBracketValidation('{}(){}')).toBe(true);
    expect(multiBracketValidation('()[[Extra Characters]]')).toBe(true);
    expect(multiBracketValidation('(){}[[]]')).toBe(true);
    expect(multiBracketValidation('{}{Alchemy}[Code](())')).toBe(true);
    expect(multiBracketValidation('[({')).toBe(false);
    expect(multiBracketValidation('(](')).toBe(false);
    expect(multiBracketValidation('{(})')).toBe(false);
  });
});
