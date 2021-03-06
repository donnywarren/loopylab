const { factorial } = require('../loop');

describe('factorial', () => {
  test('it returns the factorial of an inputted number.', () => {
    const expected = factorial(3);
    const actual = 6;
    expect(expected).toEqual(actual);
  });

  test('it returns 1 if input is 0.', () => {
    const expected = factorial(0);
    const actual = 0;
    expect(expected).toEqual(1);
  });
});
