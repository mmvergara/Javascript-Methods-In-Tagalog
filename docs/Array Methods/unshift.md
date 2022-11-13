# unshift

## Pagpapaliwanag

Maglalagay ng element sa unahan ng array. Ang return value niya is yung bagong length ng array

```javascript
const x = [2, 3, 4, 5];
const returnValue = x.unshift(1);

console.log(x); // [1, 2, 3, 4, 5 ]
console.log(returnValue); // 5
```

Nagtatake din ng multiple arguments ang `unshift()` method so pwede mo dagdahan ang gusto mong i unshift

```javascript
const x = [2, 3, 4, 5];
const returnValue = x.unshift(-1, 0, 1);

console.log(x); // [ -1, 0, 1, 2, 3, 4, 5 ]
console.log(returnValue); // 7
```

## Iba pang resources

- [MDN Documentation (English)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
