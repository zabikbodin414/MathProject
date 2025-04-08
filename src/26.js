function multiply(numbers) {
  let result = 1;
  numbers.forEach(number => {
    result *= number;
  });
  return result;
}

console.log(multiply([2, 3, 4])); // Output: 24
