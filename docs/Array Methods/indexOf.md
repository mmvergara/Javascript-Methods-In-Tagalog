# indexOf

## Pagpapaliwanag
Kukunin ang index ng element na binigay mo sa parameter. 
- if wala yung element nayon sa loob ng array. -1 ang return value. 

```javascript
const x = [1, 2, 3, 4, 5]

const indexOfElement2 = x.indexOf(2) 
const getElement2 = x[indexOfElement2] 

console.log(indexOfElement2) // 1
console.log(getElement2) // 2

const indexOfElement1000 = x.indexOf(1000)
console.log(idnexOfElement1000) // -1
```

## Iba pang resources

- [MDN Documentation (English)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
