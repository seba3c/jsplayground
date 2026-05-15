import { describe, expect, it } from 'vitest';
import { isAnagram } from './solution.js';

describe('isAnagram', () => {
  it('returns true for valid anagrams', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
  });

  it('returns false for non-anagrams', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
  });

  it('returns true for another valid anagram pair', () => {
    expect(isAnagram('listen', 'silent')).toBe(true);
  });

  it('returns false when lengths differ', () => {
    expect(isAnagram('abc', 'abcd')).toBe(false);
  });

  it('returns true for identical strings', () => {
    expect(isAnagram('hello', 'hello')).toBe(true);
  });

  it('returns false for same letters but different counts', () => {
    expect(isAnagram('aabb', 'abab')).toBe(true);
    expect(isAnagram('aabb', 'abbb')).toBe(false);
  });
});
