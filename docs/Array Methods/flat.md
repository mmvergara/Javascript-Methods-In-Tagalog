# flat

## Pagpapaliwanag
I bu-bump niyalang palabas ang mga nested array.
 - Pwede ka mag pass ng number argument kung gano kalalamin ang depth ng function "default is 1"


```javascript
const x = [ [[1]] , [[2]] , [[3]] ]

console.log( x.flat() ) // [ [ 1 ], [ 2 ], [ 3 ] ]

console.log( x.flat(1) ) // [ [ 1 ], [ 2 ], [ 3 ] ]

console.log( x.flat(2) ) // [ 1, 2, 3 ]
```


## Iba pang resources
- [MDN Documentation (English)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
