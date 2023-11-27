/**

* Given an array of strings strs, group the anagrams together. You can return the answer in any order.
* An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
  typically using all the original letters exactly once.

Example 1:
 
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
 * 
 *  */

var groupAnagrams = function (strs) {
  let strMap = {}; // ([1,_,_] : [ant, ...])

  for (word of strs) {
    let count = Array(26).fill(0);
    let charA = "a";
    for (let char = 0; char < word.length; char++) {
      let index = word.charCodeAt(char) - charA.charCodeAt(0);
      count[index] += 1;
    }
    let key = count.join("-");
    strMap[key] ? strMap[key].push(word) : (strMap[key] = [word]);
  }
  return Object.values(strMap);
};
