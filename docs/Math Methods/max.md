# max

## Pagpapaliwanag
I re-return yung pinakamataas na value sa mga binigay na parameters/arguments
- also i ta-try ni js na i convert ang mga binigay na value as a number if hindi number data-type yung binigay

```javascript
console.log(Math.max(-1, 0, 1)); // -1
console.log(Math.max("3", 4, 5)); // 5

const x = [1, 2, 3]; // Array
const y = new Set([0, 1, 2, 3, 4]); // Set

// Using spread operator para mapass mga Array/Set values as parameters
console.log(Math.max(...y)); // 4
console.log(Math.max(...x)); // 3
```

`NaN` kapag nag tinry mo mag pass ng hindi number or any na hindi pwede maconvert as a number

```javascript
console.log(Math.max({})); // NaN
```

## Iba pang resources

- [MDN Documentation (English)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
