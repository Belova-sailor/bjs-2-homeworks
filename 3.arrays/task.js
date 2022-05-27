function compareArrays(arr1, arr2) {
  let result;

  if (arr1.length === arr2.length
    && arr1.every((value, index) => value === arr2[index])) {
    result = true
  } else {
    result = false
  }

  return result; // boolean
}

function advancedFilter(arr) {
  let getPositiveNumber = (item) => item > 0;

  function getMultiplesThree(item) {
    const remainder = item % 3;
    return remainder === 0
  };

  let getMultiplesTen = (remainder) => remainder = remainder * 10;

  let resultArr = arr.filter(getPositiveNumber).filter(getMultiplesThree).map(getMultiplesTen);

  return resultArr; // array
}
