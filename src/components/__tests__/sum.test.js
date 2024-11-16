const { sum } = require('../sum');

test('sum of two numnres', () => {
  const result = sum(2, 3);
  //Assertion
  expect(result).toBe(5);
});
