export function maxArea(height: number[]): number {
  if (height.length === 0) return 0;
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const width = right - left;
    const currentHeight = Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, width * currentHeight);
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}
