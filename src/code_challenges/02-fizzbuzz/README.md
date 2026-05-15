# FizzBuzz

## Problem

Write a function that returns an array of strings representing the numbers from 1 to `n`.

But for multiples of three, return `"Fizz"` instead of the number, for multiples of five return `"Buzz"`, and for multiples of both three and five return `"FizzBuzz"`.

## Examples

```
Input: n = 3
Output: ["1", "2", "Fizz"]
```

```
Input: n = 5
Output: ["1", "2", "Fizz", "4", "Buzz"]
```

```
Input: n = 15
Output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
```

## Constraints

- `1 <= n <= 10^4`

## Approach

Iterate from 1 to `n`, using the modulo operator to check divisibility. Build the result string conditionally.

- **Time Complexity**: O(n)
- **Space Complexity**: O(n)
