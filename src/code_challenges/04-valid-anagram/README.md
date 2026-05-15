# Valid Anagram

## Problem

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## Examples

```
Input: s = "anagram", t = "nagaram"
Output: true
```

```
Input: s = "rat", t = "car"
Output: false
```

```
Input: s = "listen", t = "silent"
Output: true
```

## Constraints

- `1 <= s.length, t.length <= 5 * 10^4`
- `s` and `t` consist of lowercase English letters.

## Approach

Use a hash map (or fixed-size array for lowercase letters) to count character frequencies. If the frequency counts match, the strings are anagrams.

- **Time Complexity**: O(n)
- **Space Complexity**: O(1) — at most 26 character counts
