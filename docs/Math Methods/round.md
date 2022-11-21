# round

## Pagpapaliwanag

I roround niya lang sa pinakamalapit na integer/whole number
- also i ta-try ni js na i convert ang mga binigay na value as a number if hindi number data-type yung binigay

```javascript
console.log( Math.round(1.2) ) // 1
console.log( Math.round(1.5) ) // 2

console.log( Math.round('1.49') ) // 1
console.log( Math.round('1.50') ) // 2
```

`NaN` kapag nag tinry mo mag pass ng hindi number or any na hindi pwede maconvert as a number

```javascript
console.log(Math.round({})) // NAN
```

## Iba pang resources

- [MDN Documentation (English)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)
