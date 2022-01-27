let thing = "cat";
let count = 5;

if (count > 1) {
  let together = [...thing, "s"].join("");
  console.log(together);
} else {
  console.log(thing);
}
