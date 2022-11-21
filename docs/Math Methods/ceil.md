# ceil

## Pagpapaliwanag

I ro-round-up yung number na binigay papunta sa largest integer

- also i ta-try ni js na i convert ang mga binigay na value as a number if hindi number data-type yung binigay

```javascript
console.log(Math.ceil(1.2)); // 2

console.log(Math.ceil("7.8")); // 8

console.log(Math.ceil(0.1)); // 1

console.log(Math.ceil(1.0002)); // 2

console.log(Math.ceil(-4.004)); // -4

console.log(Math.ceil("-2.001")); // -2
```

`NaN` kapag nag tinry mo mag pass ng hindi number or any na hindi pwede maconvert as a number

```javascript
console.log(Math.ceil({})); // NaN
```

## Iba pang resources

- [MDN Documentation (English)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)
