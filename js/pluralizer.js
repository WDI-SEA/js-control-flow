/*
Write a program that starts like...

```js
let thing = 'cat';
let count = 5;
```
and outputs the pluralized form of the word, depending on what `count` is. For example, "5 cats" or "1 dog". Change `thing` to different values to test your code!

**Requirements**
* Your program should pluralize the word based on an integer (`count`)
*/

function pluralizer(thing, count) {
  switch (true) {
    case count > 1:
      console.log(`${count} ${thing}s`);
      break;
    case count === 1:
      console.log(`${count} ${thing}`);
      break;
    case count < 1:
      console.log(`count must be greater than or equal to 1`);
      break;
  }
}

const userThing = prompt("type a noun:");
const userCount = Number(prompt("type a number:"));

pluralizer(userThing, userCount);
