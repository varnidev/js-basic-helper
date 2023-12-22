import jsBasicHelper, { isEmpty } from '../src'

describe("Method : isEmpty", () => {
    const testList = [
        {
            value: undefined,
            response: true
        }, {
            value: null,
            response: true
        }, {
            value: "",
            response: true
        }, {
            value: " ",
            response: true
        }, {
            value: "0",
            response: true
        }, {
            value: "1",
            response: false
        }, {
            value: "Varni Dev",
            response: false
        }, {
            value: 0,
            response: true
        }, {
            value: 1,
            response: false
        }, {
            value: 12,
            response: false
        }, {
            value: false,
            response: true
        }, {
            value: true,
            response: false
        }, {
            value: [],
            response: true
        }, {
            value: ["one"],
            response: false
        }, {
            value: ["one", "two"],
            response: false
        }, {
            value: [{}],
            response: false
        }, {
            value: {},
            response: true
        }, {
            value: { name: "Varni Dev" },
            response: false
        }, {
            value: { key: 0 },
            response: false
        }, {
            value: { 0: 0 },
            response: false
        }
    ];


    testList.forEach((item) => {
        test(`Style Destructure CHECK : ${item.value}`, () => {
            expect(isEmpty(item.value)).toEqual(item.response);
        });
    })

    testList.forEach((item) => {
        test(`Style Export Default CHECK : ${item.value}`, () => {
            expect(jsBasicHelper.isEmpty(item.value)).toEqual(item.response);
        });
    })

    
})