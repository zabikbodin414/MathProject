const randInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randInt(0, 10));
