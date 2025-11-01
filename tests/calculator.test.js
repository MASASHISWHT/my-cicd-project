const { add, subtract } = require('../src/calculator');

test('足し算のテスト', () => {
  expect(add(2, 3)).toBe(5);
});

test('引き算のテスト', () => {
  expect(subtract(5, 3)).toBe(2);
});
