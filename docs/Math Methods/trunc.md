# trunc

## Pagpapaliwanag

Aalisin niyalang yung mga decimal places sa number.

- also i ta-try ni js na i convert ang mga binigay na value as a number if hindi number data-type yung binigay

```javascript
console.log(Math.trunc(1.2)); // 1

console.log(Math.trunc("7.8")); // 7

console.log(Math.trunc(0.1)); // 0

console.log(Math.trunc(1.0002)); // 1

console.log(Math.trunc(-4.004)); // -4

console.log(Math.ceil("-2.001")); // 2
```

`NaN` kapag nag tinry mo mag pass ng hindi number or any na hindi pwede maconvert as a number

```javascript
console.log(Math.trunc({})); // NaN
```

## Iba pang resources

- [MDN Documentation (English)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)
