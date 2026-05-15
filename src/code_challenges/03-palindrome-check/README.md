# Palindrome Check

## Problem

Given a string `s`, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

A palindrome reads the same forward and backward.

## Examples

```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

```
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

```
Input: s = " "
Output: true
Explanation: An empty string (after filtering) reads the same forward and backward.
```

## Constraints

- `1 <= s.length <= 2 * 10^5`
- `s` consists only of printable ASCII characters.

## Approach

Use two pointers: one starting from the beginning, one from the end. Move inward, skipping non-alphanumeric characters, and compare characters (case-insensitive).

- **Time Complexity**: O(n)
- **Space Complexity**: O(1)
