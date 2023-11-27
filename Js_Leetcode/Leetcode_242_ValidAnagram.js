/**
* Given two strings s and t, return true if t is an anagram of s, and false otherwise.
* An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

* Input: s = "anagram", t = "nagaram"
* Output: true

Example 2:

* Input: s = "rat", t = "car"
* Output: false 
 
* */

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let sMap = new Map();

  for (char of s) {
    sMap.set(char, sMap.get(char) + 1 || 1);
  }

  for (char of t) {
    if (!sMap.has(char)) {
      return false;
    } else {
      sMap.set(char, sMap.get(char) - 1);
    }
  }

  for (let [key, value] of sMap) {
    if (value > 0) return false;
  }

  return true;
};
