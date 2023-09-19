/ 1. Convert a string to an array
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  const stringToArray = string.split(/\s+/);
  return stringToArray;
}
// 2. DNA to RNA Conversion
// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  const result = dna.replace(/T/g, "U");
  return result;
}

// 3. Find Maximum and Minimum Values of a List
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

var min = function (list) {
  let min = list[0];

  for (let i = 1; i < list.length; i++) {
    if (list[i] < min) {
      min = list[i];
    }
  }

  return min;
};

var max = function (list) {
  let max = list[0];

  for (let i = 1; i < list.length; i++) {
    if (list[i] > max) {
      max = list[i];
    }
  }

  return max;
};

// 4. Smallest value of an array
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  let smallestValue = arr[0];
  let smallestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestValue) {
      smallestValue = arr[i];
      smallestIndex = i;
    }
  }

  if (toReturn === "value") {
    return smallestValue;
  } else if (toReturn === "index") {
    return smallestIndex;
  }
}
