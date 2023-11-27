var compareVersion = function (version1, version2) {
  // split both versions into array
  // array.shift to get the revision 0 of both
  // add everything into revision 1 after the shift
  // added revisionOne 1 > revisionTwo 1 = -1
  // added recisionOne 1 < revisionTwo 1 = 1

  let versionOne = ("" + version1).split(".");
  let versionTwo = ("" + version2).split(".");

  let [mainVersionOne, ...revesionOne] = versionOne;
  let [mainVersionTwo, ...revesionTwo] = versionTwo;

  if (parseInt(mainVersionOne) > parseInt(mainVersionTwo)) {
    return -1;
  } else if (parseInt(mainVersionOne) < parseInt(mainVersionTwo)) {
    return 1;
  } else if (parseInt(mainVersionOne) === parseInt(mainVersionTwo)) {
    let totalRevisionOne = revesionOne.reduce((acc, elem) => {
      return acc + parseInt(elem);
    }, 0);
    let totalRevisionTwo = revesionTwo.reduce((acc, elem) => {
      return acc + parseInt(elem);
    }, 0);

    if (totalRevisionOne > totalRevisionTwo) {
      return -1;
    } else if (totalRevisionOne < totalRevisionTwo) {
      return 1;
    } else {
      return 0;
    }
  }
};

console.log(compareVersion("1.0.2", "0.1"));

// https://github.com/chb0github/salesforce
// https://www.hackerrank.com/contests/coderadon/challenges/alien-numbers
