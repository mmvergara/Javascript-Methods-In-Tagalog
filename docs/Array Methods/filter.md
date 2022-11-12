# filter

## Pagpapaliwanag
i fi-filter ang array base sa isang `condition`

Return Value - Shallow Copy ng array
```javascript
const x = [1, 2, 3, -4, -5, -6];
const negativeNumbers = x.filter((num) => { return num < 0 });
/*                   if yung number is less than 0 get mo, if not skip mo
                      1 < 0 = false
                      2 < 0 = false
                      3 < 0 = false
                      -4 < 0 = true
                      -5 < 0 = true
                      -6 < 0 = true
*/
console.log(negativeNumbers); // [ -4, -5, -6 ]
```

```javascript
const x = [1, 2, 3, -4, -5, -6];
const positiveNumbers = x.filter((num) => { return num > 0 });
/*                   if yung number is greater than 0 get mo, if not skip mo
                      1 < 0 = true
                      2 < 0 = true
                      3 < 0 = true
                      -4 < 0 = false
                      -5 < 0 = false
                      -6 < 0 = false
*/
console.log(positiveNumbers); // [ 1, 2, 3 ]
```

## Iba pang resources

- [MDN Documentation (English)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
