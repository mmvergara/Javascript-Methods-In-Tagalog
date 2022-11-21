# forEach

## Pagpapaliwanag

Mag loloop lang siya sa each element ng array.

```javascript
const x = ["Hello", "World", "I am", "Mark", "Matthew", "Vergara"];

x.forEach((element) => {
  console.log(element);
});

// Logs----
// Hello
// World
// I am
// Mark
// Matthew
// Vergara
```

Same lang siya as doing a normal for loop

```js
const x = ["Hello", "World", "I am", "Mark", "Matthew", "Vergara"];

for (let i = 0; i < x.length; i++) {
  console.log(x[i]);
}

// Logs----
// Hello
// World
// I'am
// Mark
// Matthew
// Vergara
```

## Iba pang resources

- [MDN Documentation (English)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
