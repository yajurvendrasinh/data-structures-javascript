// Flatten Array

function deepFlattenRecursive(arr) {
  const flatten = [];

  if (Array.isArray(arr)) {
    arr.forEach((item) => {
      const result = deepFlattenRecursive(item);
      flatten.push(...result);
    });
  } else {
    flatten.push(arr);
  }

  return flatten;
}

function deepFlattenIterative(arr) {
  let stack = [...arr];
  let flattened = [];

  while (stack.length) {
    let current = stack.shift();
    if (Array.isArray(current)) {
      stack.unshift(...current);
    } else {
      flattened.push(current);
    }
  }
  return flattened;
}

// This is a JavaScript coding problem from BFE.dev

const arrOne = [1, [2], [3, [4]]];
function flat(arr, depth = 1) {
  // your imeplementation here
  let result = arr.reduce((acc, elem) => {
    if (Array.isArray(elem) && depth > 0) {
      acc.push(...flat(elem, depth - 1));
    } else {
      acc.push(elem);
    }
    return acc;
  }, []);

  return result;
}

// Flatten Objects

function flattenObj(input) {
  if (typeof input !== "object" || typeof input === null) return input;
  let flattened = {};

  for (let key in input) {
    let current = input[key];
    let currentFlat = flattenObj(current);

    if (typeof current === "object" && typeof current !== null) {
      flattened = { ...flattened, ...currentFlat };
    } else {
      flattened[key] = current;
    }
  }

  return flattened;
  x;
}
Xxxx;
