# every

## Pagpapaliwanag

I tetest lahat ang mga laman ng array if pasado sila sa isang `Condition`.

- mag rereturn ng `true` if lahat sila ay pasado sa `Condition`.
- mag rereturn ng `false` if isa sakanila is hindi pasado sa `Condition`.

Return Value : Boolean
```javascript
const x = [1, 2, 3];

const returnValue = x.every((number) => {return number > 0});
/*                Condition: Bawat number ay greater than 0
      1 > 0 = true
      2 > 0 = true
      3 > 0 = true
*/
console.log(returnValue); // true
// since nakapasa lahat ng element sa condition true ang return value
```

```jsx
const x = [1, 2, -3];

const returnValue = x.every((number) => {return number > 0});
/*                Condition: Bawat number ay greater than 0
      1 > 0 = true
      2 > 0 = true
    -3 > 0 = false
*/
console.log(returnValue); // false
// since yung isa sakanila is hindi pasado sa condition, false ang return value
```

## Iba pang resources
- [MDN Documentation (English)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
