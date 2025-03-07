let num = Math.floor(Math.random() * 10 + 1);
console.log("The number is " + num);
if (num === 5) {
    console.log("You got a 5!");
} else if (num % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}
