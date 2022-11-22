# indexOf

## Pagpapaliwanag

Kukunin ang index ng pinakaunang element na binigay mo sa parameter.

- if wala yung element nayon sa loob ng array. -1 ang return value.
- kukunin ng indexOf ang index ng pinakaunang element na kamukha ng binigay mong parameter, if gusto mo is kunin niya yung index ng pinaka huling element ( in this case is index 5 ) try `lastIndexOf()` instead.

```javascript
const x = [1, 2, 3, 4, 5, 2];

const indexNgElement2 = x.indexOf(2);

console.log(indexNgElement2); // 1
console.log(x[indexNgElement2]); // 2

const indexNgElement1000 = x.indexOf(1000);
console.log(indexNgElement1000); // -1
```

## Iba pang resources

- [MDN Documentation (English)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
