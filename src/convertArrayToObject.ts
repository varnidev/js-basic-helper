function convertArrayToObject(array: any[], keyName: string) {
    // V2023.12.001
    let returnObject = {};
    array.forEach((element: any) => {
        returnObject = {
            ...returnObject,
            [element[keyName]]: element,
        };
    });
    return returnObject;
}

export default convertArrayToObject;