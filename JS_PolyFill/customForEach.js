/**
 * 
 * Write your version of method forEach that enhances all arrays such that you can call the array.forEach(callback, context) method on any array and it will execute callback on each element of the array. Method forEach should not return anything.
 callback accepts the following arguments:

 currentValue - represents the current element being processed in the array. It is the value of the element in the current iteration.
 index - represents the index of the current element being processed in the array.
 array - represents the array itself, allowing access to the entire array within the callback function.
 The context is the object that should be passed as the function context parameter to the callback function, ensuring that the this keyword within the callback function refers to this context object.
 */

Array.prototype.forEach = function (callback, context) {
  // iterate over this array:
  for (let i = 0; i < this.length; i++) {
    // use call method on callback and provide context with arguments
    callback.call(context, this[i], i, this);
  }
};
