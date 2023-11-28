/**
 * 
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 
 */

var longestConsecutive = function (nums) {
  let longest = 0;
  let numSet = new Set(nums);

  for (num of nums) {
    // check if the previous number of current num exist in set
    // if not, then its the start of the sequence
    if (!numSet.has(num - 1)) {
      // the previous doesnt exist hence we can start the sequence from current num
      let length = 0; // initialize the length to count upto what the subsequence is valid
      while (numSet.has(num + length)) {
        // to find the consequetive number from the numSet
        length = length + 1;
      }
      longest = Math.max(length, longest);
    }
  }

  return longest;
};
