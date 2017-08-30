var singular = 'rabbit';
var count = '1';

count = parseInt(count);

if (count===1){
  console.log(count + " " + singular);
} else {
  console.log(count + " " + singular + "s");
}