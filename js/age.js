const userAge = prompt("Please enter your age in years");

if (Number(userAge) < 0 || Number(userAge) > 20) {
  prompt(
    "Not a valid age. Please enter your age, using a number that is greater than or equal to 0"
  );
}

function ageCategory() {
  const compAge = Number(userAge);
  switch (true) {
    case compAge <= 1:
      alert("You are an infant. Please stop using the computer.");
      break;
    case compAge > 1 && compAge <= 3:
      alert("You are a toddler. How did you get access to this computer?");
      break;
    case compAge > 3 && compAge <= 5:
      alert("You are a child. Enjoy it while you can.");
      break;
    case compAge > 5 && compAge <= 12:
      alert("You are a pre-teen. The end is nigh.");
      break;
    case compAge > 12 && compAge < 17:
      alert("You are a teenager. I am so sorry.");
      break;
    case compAge >= 18:
      alert(
        "Congrats, you are a young adult and will have to pay rent soon! :)"
      );
      break;
  }
}

console.log(ageCategory());
