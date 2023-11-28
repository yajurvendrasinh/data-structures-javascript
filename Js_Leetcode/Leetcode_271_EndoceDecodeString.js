/**
 * 
 * Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Machine 1 (sender) has the function:

string encode(vector<string> strs) {
  // ... your code
  return encoded_string;
}
Machine 2 (receiver) has the function:
vector<string> decode(string s) {
  //... your code
  return strs;
}
So Machine 1 does:

string encoded_string = encode(strs);
and Machine 2 does:

vector<string> strs2 = decode(encoded_string);
strs2 in Machine 2 should be the same as strs in Machine 1.

Implement the encode and decode methods.
 */

// Clever Version ( Explanation: https://youtu.be/B1k_sxOSgv8?si=B7QksT54ZDqvsPnv)
var encode = function (strs) {
  return strs.join(String.fromCharCode(257));
};

var decode = function (s) {
  return s.split(String.fromCharCode(257));
};
// Interview Version
var encode = function (strs) {
  let newString = "";
  strs.forEach((str) => {
    const lengthInStr = ("000" + str.length).slice(-3);
    newString = `${newString}${lengthInStr}${str}`;
  });
  return newString;
};

var decode = function (s) {
  const newArray = [];
  let i = 0;
  while (i < s.length) {
    const strlength = parseInt(s.substr(i, 3));
    i += 3;
    newArray.push(s.substr(i, strlength));
    i += strlength;
  }
  return newArray;
};
