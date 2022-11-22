# indexOf

## Pagpapaliwanag

Hahanapin niyalang yung "pinakaunang" occurence ng string na binigay mo as an argument tapos **re-return value niya yung index** nung string nayon.

> if wala siyang nakita **re-return niya is -1**

**First Argument** - yung string na gusto mong kunin yung unahan niyang index

```javascript
const x = "hello my dog name is dog";

console.log(x.indexOf("my")); // 6
console.log(x.indexOf("o")); // 4
console.log(x.indexOf("wolf")); // -1
```

**Second Argument (optional)** - kung sang index siya mag-uumpisa mag search (default is 0 which is yung start ng string)

```javascript
const x = "hello my dog name is dog";

// Searching sa 'hello my dog name is dog'
console.log(x.indexOf("hello", 0)); // 0

// Searching sa 'ello my dog name is dog'
console.log(x.indexOf("hello", 1)); // -1

// Searching sa 'llo my dog name is dog'
console.log(x.indexOf("llo", 2)); // 2

// Searching sa 'hello my dog name is dog'
console.log(x.indexOf("llo")); // 2
```

comparison sa `lastIndexOf`

```javascript
const x = "hello my dog name is dog";

console.log(x.indexOf("dog")); // 9

console.log(x.lastIndexOf("dog")); // 21
```

## Iba pang resources

- [MDN Documentation (English)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
