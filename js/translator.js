let lang = ['eng', 'ru', 'jp']
let x = Math.floor(Math.random()*lang.length)
if (x < 1) {
    console.log("Hello World")
} else if (x > 0 && x < 2) {
    console.log("Привет, мир")
} else {
    console.log("こんにちは世界")
}