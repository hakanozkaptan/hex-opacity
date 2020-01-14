import { hexConverter } from 'utils';

test('convert opacity to hex', () => {
  expect(hexConverter(70)).toBe('B3');
});

test('hex length equal to 2', () => {
  expect(hexConverter(6)).toHaveLength(2);
});

test('hex length not to equal 3', () => {
  expect(hexConverter(6)).not.toHaveLength(3);
});
