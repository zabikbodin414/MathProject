// This is just an example of how you could calculate the factorial of 5
function factorial(n) {
  if (n <= 1) {
    return n;
  } else {
    return n * factorial(n-1);
  }
}

console.log(factorial(5)); // should print 120
