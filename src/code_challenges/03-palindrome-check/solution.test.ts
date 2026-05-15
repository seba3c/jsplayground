import { describe, expect, it } from 'vitest';
import { isPalindrome } from './solution.js';

describe('isPalindrome', () => {
  it('returns true for a classic palindrome with punctuation', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  it('returns false for non-palindrome', () => {
    expect(isPalindrome('race a car')).toBe(false);
  });

  it('returns true for empty-ish string', () => {
    expect(isPalindrome(' ')).toBe(true);
  });

  it('returns true for single alphanumeric character', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  it('returns true for numeric palindrome', () => {
    expect(isPalindrome('12321')).toBe(true);
  });

  it('returns false for numeric non-palindrome', () => {
    expect(isPalindrome('123')).toBe(false);
  });
});
