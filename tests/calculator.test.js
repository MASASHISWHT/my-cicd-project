const { add, subtract, multiply, divide } = require('../src/calculator');

test('足し算のテスト', () => {
  expect(add(2, 3)).toBe(5);
});

test('引き算のテスト', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('掛け算のテスト', () => {
  expect(multiply(3, 4)).toBe(12);
});

test('割り算のテスト', () => {
  expect(divide(10, 2)).toBe(5);
});

test('ゼロ除算のテスト', () => {
  expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
});
