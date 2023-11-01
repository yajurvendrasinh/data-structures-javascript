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

// Flatten Objects

function flattenObj(input) {
  if (typeof input !== 'object' || typeof input === null) return input;
  let flattened = {};

  for (let key in input) {
    let current = input[key];
    let currentFlat = flattenObj(current);

    if (typeof current === 'object' && typeof current !== null) {
      flattened = { ...flattened, ...currentFlat };
    } else {
      flattened[key] = current;
    }
  }

  return flattened;
  x;
}
Xxxx;
