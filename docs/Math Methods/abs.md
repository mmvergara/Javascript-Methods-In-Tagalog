# abs

## Pagpapaliwanag

Kukunin niyalang ang Absolute Value ng isang number

- also i ta-try ni js na i convert ang mga binigay na value as a number if hindi number data-type yung binigay

```javascript
const x = 1 - 5;
console.log(x); // -4

console.log(Math.abs(x)); // 4
console.log(Math.abs("-4")); // 4
```

`NaN` kapag nag tinry mo mag pass ng hindi number or any na hindi pwede maconvert as a number

```javascript
console.log(Math.abs({})); // NAN
```

## Iba pang resources

- [MDN Documentation (English)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)
