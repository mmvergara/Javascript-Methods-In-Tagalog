# findIndex

## Pagpapaliwanag

Hahanapin niya ang index ng "unang" element na pasado sa binigay mong condition.

```javascript
const x = [5, 1, 7, 3, 2]

// Hanapin ang index ng "unang" element na mas greater than 2 
console.log( x.findIndex(element => element > 2 ) ) // 0
console.log( x[0] ) // 5
```

note: Kung gusto mo naman kuning ang index ng "huling element" kesa sa "unang element" pwede mo i try ang `findLastIndex` array method

## Iba pang resources
- [MDN Documentation (English)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
