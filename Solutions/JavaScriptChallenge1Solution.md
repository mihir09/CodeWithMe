# JavaScriptChallenge1 Solution

## Question

Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.

## Logic

Using property Obeject.keys() we can find all the keys of secondObject. Now for every key we'll check if firstObject has that property or not using Object.hasOwnProperty and if it exists then check values are equal or not.

## Code

```javascript
const matchObjects = (firstObject, secondObject) => {
    return Object.keys(secondObject).every(property => firstObject.hasOwnProperty(property) && firstObject[property] === secondObject[property]);
}
```

### Question Source

https://www.w3resource.com/