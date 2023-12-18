function convertArrayToObject(array, keyName) {
  // V2023.12.001
  let returnObject = {};
  array.forEach((element) => {
    returnObject = {
      ...returnObject,
      [element[keyName]]: element,
    };
  });
  return returnObject;
}

function isEmpty(value) {
  // V2023.12.002
  if (typeof value != "object" && typeof value != "function") {
    if (
      [undefined, null, 0, "0", "", NaN].some(
        (checkValue) => checkValue == value
      )
    ) {
      return true;
    }
  } else {
    if (value == null || NaN == value) {
      return true;
    } else if (Array.isArray(value)) {
      return value.length < 1;
    } else if (value instanceof Date) {
      return false;
    } else if (typeof value == "function") {
      return false;
    }
  }
  return Object.keys(value).length === 0;
}

module.exports = { convertArrayToObject, isEmpty };
