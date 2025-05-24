// Example of a simple counter function to increment the number of times an event is triggered
function triggerCounter() {
  const count = 0;
  
  // Increment the count every time this function is called
  for (let i = 0; i < 5; i++) {
    if (i % 2 === 0) {
      count++;
    }
  }

  return count;
}

// Example usage: Let's say we have a variable named `counter` that holds the result of the triggerCounter function
const counterValue = triggerCounter();
console.log(`The event was triggered ${counterValue} times.`);
