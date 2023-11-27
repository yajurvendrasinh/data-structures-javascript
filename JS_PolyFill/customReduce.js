let inputArr = [1, 2, 3, 4];

let result = inputArr.reduce((acc, elem) => {
  return acc + elem;
}, 0);

function MyReduce(callback, initialVal) {
  var accumulator = initialVal === undefined ? this[0] : initialVal;
  var start = initialVal === undefined ? 1 : 0;
  for (var i = start; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this); // i is the index and this is the array itself
  }
  return accumulator;
}

Array.prototype.MyReduce = MyReduce;
