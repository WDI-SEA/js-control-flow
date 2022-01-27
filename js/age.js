const ages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (let i = 0; i < ages.length; i++) {
    if (i <= 1) {
        console.log("infant")
    } else if (i > 1, i < 5) {
        console.log("toddler")
    } else if (i > 4, i < 11) {
        console.log("child")
    } else if (i > 10, i < 13) {
        console.log("preteen")
    } else if (i > 12, i < 18) {
        console.log("teen")
    } else {
        console.log("young adult")
    }
}