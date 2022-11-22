# lastIndexOf

## Pagpapaliwanag

Hahanapin niyalang yung "pinakahuling" occurence ng string na binigay mo as an argument tapos **re-return value niya yung index** nung string nayon.

> if wala siyang nakita **re-return niya is -1**

**First Argument** - yung string na gusto mong kunin yung hulihan niyang index

```javascript
const x = "hello my dog name is dog";

console.log(x.lastIndexOf("my")); // 6
console.log(x.lastIndexOf("o")); // 22
console.log(x.lastIndexOf("wolf")); // -1
```

**Second Argument (optional)** - kung sang index siya mag-uumpisa mag search (default is 0 which is yung start ng string)

```javascript
const x = "hello my dog name is dog";

// Searching sa 'hello my dog name is dog'
console.log(x.lastIndexOf("hello", 0)); // 0

// Searching sa 'ello my dog name is dog'
console.log(x.lastIndexOf("hello", 1)); // 0

// Searching sa 'llo my dog name is dog'
console.log(x.lastIndexOf("llo", 2)); // 2

// Searching sa 'hello my dog name is dog'
console.log(x.lastIndexOf("llo")); // 2
```

comparison sa `lastIndexOf`

```javascript
const x = "hello my dog name is dog";

console.log(x.indexOf("dog")); // 9

console.log(x.lastIndexOf("dog")); // 21
```

## Iba pang resources

- [MDN Documentation (English)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)
