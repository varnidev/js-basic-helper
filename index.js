function convertArrayToObject(array, keyName) {
  let returnObject = {};
  array.forEach((element) => {
    returnObject = {
      ...returnObject,
      [element[keyName]]: element,
    };
  });
  return returnObject;
}

module.exports = {convertArrayToObject};
