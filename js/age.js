const age = 13;

if (age >= 0 && age <= 1) {
    console.log("Infant");
}
else if (age > 1 && age <= 3) {
    console.log("Toddler");
}
else if (age > 3 && age <= 12) {
    console.log("Child");
}
else if (age > 12 && age <= 18) {
    console.log("Teen");
}
else if (age > 18 && age < 21) { 
    console.log("Young Adult");
}else{
    console.log("You are either not born yet, or an Adult, or dead.");
}