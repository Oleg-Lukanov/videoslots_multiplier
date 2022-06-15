describe(`Function 'multiplier'`, () => {
  const {multiplier } = require('./multiplier');

  it(`should be declared`, () => {
    expect(multiplier)
      .toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(typeof multiplier([0, 4, 24, 6, 1]))
      .toBe('number');
  });

  it(`should return '0' when input is '0'`, () => {
    expect(multiplier([0]))
      .toBe(0);
  });

  it(`should return '0' when input is '[]'`, () => {
    expect(multiplier([]))
      .toBe(0);
  });

  it(`should return '5' when input is [0, 4, 24, 6, 1, 36, 8]`, () => {
    expect(multiplier([0, 4, 24, 6, 1, 36, 8]))
      .toBe(5);
  });  
});
