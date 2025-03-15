// Random math function
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Use the function to generate a random number between 1 and 10
console.log(getRandomNumber(1, 10));
