import { describe, expect, it } from 'vitest';
import { fizzBuzz } from './solution.js';

describe('fizzBuzz', () => {
  it('returns basic sequence for n = 3', () => {
    expect(fizzBuzz(3)).toEqual(['1', '2', 'Fizz']);
  });

  it('includes Buzz at n = 5', () => {
    expect(fizzBuzz(5)).toEqual(['1', '2', 'Fizz', '4', 'Buzz']);
  });

  it('includes FizzBuzz at n = 15', () => {
    const result = fizzBuzz(15);
    expect(result[14]).toBe('FizzBuzz');
    expect(result).toEqual([
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ]);
  });

  it('handles n = 1', () => {
    expect(fizzBuzz(1)).toEqual(['1']);
  });
});
