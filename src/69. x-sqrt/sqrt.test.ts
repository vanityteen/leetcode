import { mySqrt } from './sqrt';

test('sqrt 2 toBe 1', () => {
  expect(mySqrt(2)).toBe(1);
  expect(mySqrt(8)).toBe(2);
  expect(mySqrt(20250808)).toBe(4500);
}); 