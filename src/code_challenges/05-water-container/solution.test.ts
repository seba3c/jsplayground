import { describe, expect, it } from 'vitest';
import { maxArea } from './solution.js';

describe('maxArea', () => {
  it('returns 49 for this array', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
  });

  it('returns 0 for empty array', () => {
    expect(maxArea([])).toEqual(0);
  });

  it('returns 1 for this array', () => {
    expect(maxArea([1, 1])).toEqual(1);
  });

  it('returns 0 for this array', () => {
    expect(maxArea([10, 0])).toEqual(0);
  });

  it('returns 49 for this array', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 7, 3, 8])).toEqual(56);
  });
});
