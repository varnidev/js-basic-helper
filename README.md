# js-basic-helper

js-basic-helper is use for basic javascript operation

[VarniDev](https://www.varnidev.com) is Developer website. You can reach me through my website.

## Installation

Using npm:

```
npm i --save js-basic-helper
```

## Usage

```
import jsBasicHelper from 'js-basic-helper';
```

> check parameter is empty or not `isEmpty(value)` method.

```
jsBasicHelper.isEmpty(undefined);                   true
jsBasicHelper.isEmpty(null);                        true
jsBasicHelper.isEmpty("");                          true
jsBasicHelper.isEmpty(" ");                         true
jsBasicHelper.isEmpty("0");                         true
jsBasicHelper.isEmpty("Varnidev");                  false
jsBasicHelper.isEmpty(0);                           true
jsBasicHelper.isEmpty(1);                           true
jsBasicHelper.isEmpty(false);                       true
jsBasicHelper.isEmpty(true);                        true
jsBasicHelper.isEmpty([]);                          true
jsBasicHelper.isEmpty(["apple", "banana"]);         false
jsBasicHelper.isEmpty({});                          true
jsBasicHelper.isEmpty({ name: "Varni Dev" });       false
```

> convert array to object using `convertArrayToObject(array, keyName)` method.

```
const arrayList = [
  {
    userId: 1,
    uniqueKey: 1,
    title: "quidem molestiae enim",
  },
  {
    userId: 1,
    uniqueKey: 2,
    title: "sunt qui excepturi placeat culpa",
  },
  {
    userId: 1,
    uniqueKey: 3,
    title: "omnis laborum odio",
  },
];

console.log(jsBasicHelper.convertArrayToObject(arrayList, "uniqueKey"));

OUTPUT:

{
  '1': { userId: 1, id: 1, title: 'quidem molestiae enim' },
  '2': { userId: 1, id: 2, title: 'sunt qui excepturi placeat culpa' },
  '3': { userId: 1, id: 3, title: 'omnis laborum odio' }
}
```

## Release Version Info

### V2023.12.003

- convert project to typescript

### V2023.12.002

- create `isEmpty` method for check parameter value is empty or not.

### V2023.12.001

- create `convertArrayToObject` method to convert array in to object.
