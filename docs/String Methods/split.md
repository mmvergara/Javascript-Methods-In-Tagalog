# split

## Pagpapaliwanag
I i-split niya ang string para maging array. Ang parameter na kinukuha niya ang tinataway na `DELIMITER` at yung ang string na gagamitin niya na basis para i split ang string.


```javascript
const str = "Hello World";

console.log(str.split(""));
// [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ]

console.log(str.split(" "));
// [ 'Hello', 'World' ] ​​​​

const str2 = "Hello-World-Crown";

console.log(str2.split("-"));
// [ 'Hello', 'World', 'Crown' ]
```

## Iba pang resources

- [MDN Documentation (English)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
