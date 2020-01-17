import { transparencyConverter } from 'utils';

test('convert opacity to hex', () => {
  expect(transparencyConverter(70)).toBe('B3');
});

test('hex length equal to 2', () => {
  expect(transparencyConverter(6)).toHaveLength(2);
});

test('hex length not to equal 3', () => {
  expect(transparencyConverter(6)).not.toHaveLength(3);
});
