#JS Control Flow

##Getting Started
* Fork and clone this repository
* Create a separate file for each exercise. This will make it easier to keep track of solutions
  * It may also be beneficial to copy/paste any data structures provided
* Write JavaScript code to obtain the data prompted by each question


###reverse.js
Write a program that will take a hardcoded string, and console log the reversed version of it.

**Requirements**
* You must use a `for` loop. No `.reverse()`
* You may use the string below

```js
var inputString = "building"
```

###filterLongWords.js
Write a program that will take an array of words. Using a variable called `maxLength`, push words that are less than the `maxLength` into a new array, and `console.log` the value of `maxLength`.

**Requirements**
* Your array of words should be stored in a variable, which can be named whatever you like
* `maxLength` should be a positive number

###grade.js
Write a program that will print the letter grade, given a variable with a test score. Display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100.

**Requirements**
* Your program should have a variable to store the letter grade (an integer between 0 and 100)
* For the letter grades, you may use whatever grading scale you like
* You must use a switch statement (hint, you may need to review and think about how the `switch` statement works)

###pluralizer.js
Write a program that takes an input like...

```js
var thing = "cat"
var count = "5"
```
and output the pluralized form of the word, depending on what `count` is. For example, "5 cats" or "1 dog".

**Requirements**
* Your program should pluralize the word based on an integer (`count`)

##tempConvert.js
Write a program that converts a temperature from Fahrenheit to Celsius.

**Requirements**
* Your program should take an integer (in Fahrenheit) and convert the temperature to Celsius.
* The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius"
