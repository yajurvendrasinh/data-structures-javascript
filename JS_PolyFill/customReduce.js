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

// ////////////////////////////////////////

process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function (data) {
  input_stdin += data;
});

process.stdin.on("end", function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

function addNumbers(a, b) {
  return a + b;
}

function main() {
  var a = parseInt(readLine());
  var b = parseInt(readLine());

  var res = addNumbers(a, b);
}

// returns the state of *all* features for current user
function fetchAllFeatures() {
  // in reality, this would have been a `fetch` call:
  // `fetch("/api/features/all")`
  return new Promise((resolve, reject) => {
    const sampleFeatures = {
      "extended-summary": true,
      "feedback-dialog": false,
    };

    setTimeout(reject, 100, sampleFeatures);
  });
}
// src/feature-x/summary.js
getFeatureState("extended-summary").then(function (isEnabled) {
  if (isEnabled) {
    console.log(isEnabled);
  } else {
    console.log(isEnabled);
  }
});

// src/feature-y/feedback-dialog.js
getFeatureState("feedback-dialog").then(function (isEnabled) {
  if (isEnabled) {
    makeFeedbackButtonVisible();
  }
});

async function getFeatureState(feature) {
  // just the feature

  // return a true or false state
  // feature is an object
  let cacheObject = {};
  if (cacheObject[feature]) {
  }
  try {
    let sourceFeatures = await fetchAllFeatures(); //
    let overRide = addDevOverrideForFeature(feature, val, sourceFeatures);
    console.log("overRide", overRide);
    let myFeatures = overRide;

    return new Promise((resolve, reject) => {
      if (Object.keys(myFeatures).length === 0 || myFeatures === undefined) {
        reject("no features are available at this point in time");
      } else {
        resolve(myFeatures[feature]);
      }
    });
  } catch {
    console.log("-> in catch");
    return new Promise((_, reject) => {
      reject("no festure found");
    });
  }
}

function addDevOverrideForFeature(feature, val, source) {
  let userFeatureSet = { ...source, feature: val };
  return userFeatureSet;
}
// After running this, the state of "extended-summary" feature
// should be considered "on" throughout the whole app for the
// current developer, no matter what the actual backend state is.

addDevOverrideForFeature("feedback-dialog", true);
getFeatureState("feedback-dialog");
