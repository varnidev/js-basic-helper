import jsBasicHelper, { convertArrayToObject } from '../src'

describe("Method : convertArrayToObject", () => {

    test('Style Destructure', () => {
        const dataIn = [
            { key: "one", value: "1" },
            { key: "two", value: "2" },
            { key: "three", value: "3" },
        ];
        const dataOut = {
            "one": { key: "one", value: "1" },
            "two": { key: "two", value: "2" },
            "three": { key: "three", value: "3" },
        };
        expect(convertArrayToObject(dataIn, 'key')).toEqual(dataOut);
    });

    test('Style Export Default', () => {
        const dataIn = [
            { key: "one", value: "1" },
            { key: "two", value: "2" },
            { key: "three", value: "3" },
        ];
        const dataOut = {
            "one": { key: "one", value: "1" },
            "two": { key: "two", value: "2" },
            "three": { key: "three", value: "3" },
        };
        expect(jsBasicHelper.convertArrayToObject(dataIn, 'key')).toEqual(dataOut);
    });
})