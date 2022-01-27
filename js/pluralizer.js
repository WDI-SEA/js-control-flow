/* ### pluralizer.js
Write a program that starts like...

```js
let thing = 'cat';
let count = 5;
```
and outputs the pluralized form of the word, depending on what `count` is. For example, "5 cats" or "1 dog". Change `thing` to different values to test your code!

**Requirements**
* Your program should pluralize the word based on an integer (`count`)*/

let thing = 'cat'
let count = 5

let thisOne = [...thing, 's'].join(',') // join(',') will put commas in between each letter
console.log(this0ne)

if (count > 1) {
    let together = ([...thing, 's']).join('') 
    console.log(together)
} else {
    console.log(thing)
}