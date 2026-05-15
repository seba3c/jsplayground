/**
 * Returns the indices of the two numbers that add up to target.
 *
 * @param nums - Array of integers
 * @param target - Target sum
 * @returns Tuple of indices [i, j]
 */
export function twoSum(nums: number[], target: number): [number, number] {
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement)!, i];
    }
    seen.set(nums[i], i);
  }

  throw new Error('No two sum solution');
}
