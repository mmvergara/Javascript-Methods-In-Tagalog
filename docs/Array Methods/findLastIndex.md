# findLastIndex

## Pagpapaliwanag

Hahanapin niya ang index ng "huling" element na pasado sa binigay mong condition.

```javascript
const x = [5, 1, 7, 3, 2]

// Hanapin ang index ng "huling" element na mas greater than 2 
console.log( x.findLastIndex(element => element > 2 ) ) // 0
console.log( x[3] ) // 3
```

note: Kung gusto mo naman kuning ang index ng "unang element" kesa sa "huling element" pwede mo i try ang `findLast` array method

## Iba pang resources
- [MDN Documentation (English)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)
