function flattenObject(input) {
  // check if its not obj or null
  if (typeof input !== "object" || typeof input === null) return input;
  let flattenObj = {};

  for (let key in input) {
    const val = input[key];
    const flatVal = flattenObj(val); // call flattenObject recursivelly on each value

    if (typeof flatVal === "object" && typeof flatval !== null) {
      flattenObj = { ...flattenObj, ...flatVal }; // spreading already existing values of result flattenObjet and adding spreaded flatvalu to it
    } else {
      flattenObject[key] = flatval;
    }
  }

  return flattenObj;
}
