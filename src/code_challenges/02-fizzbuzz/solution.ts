/**
 * Returns the FizzBuzz sequence from 1 to n.
 *
 * @param n - Upper bound (inclusive)
 * @returns Array of strings
 */
export function fizzBuzz(n: number): string[] {
  const result: string[] = [];

  for (let i = 1; i <= n; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    result.push(output || String(i));
  }

  return result;
}
