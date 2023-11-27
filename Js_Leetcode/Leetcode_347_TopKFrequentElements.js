/**
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 Example 1:
 
 Input: nums = [1,1,1,2,2,3], k = 2
 Output: [1,2]

 Example 2:
 
 Input: nums = [1], k = 1
 Output: [1]

 */

var topKFrequent = function (nums, k) {
  let temp = [];
  let freqMap = new Map();

  for (num of nums) {
    freqMap.set(num, freqMap.get(num) + 1 || 1);
  }
  for (let [key, value] of freqMap) {
    temp[value] = temp[value].push(key) || [key];
  }

  for (let i = temp.length - 1; i >= 0; i--) {
    if (temp[i] !== undefined && result.length < k) {
      result.push(temp[i]);
    }
  }

  return result;
};
