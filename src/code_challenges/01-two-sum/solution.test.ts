import { describe, expect, it } from 'vitest';
import { twoSum } from './solution.js';

describe('twoSum', () => {
  it('returns indices for a basic case', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('handles non-adjacent pairs', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it('handles duplicate values', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it('handles negative numbers', () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });

  it('throws when no solution exists', () => {
    expect(() => twoSum([1, 2, 3], 10)).toThrow('No two sum solution');
  });
});
