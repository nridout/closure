// function countdownGenerator() that takes in a number x
// and returns a function that counts down when it is called
var countdownGenerator = function (x) {
  // sets time to the number passed into the function minus 1
  var time = x + 1;
  // calls function
  return function() {
    // subtract 1 from time to count down
    time -= 1;
    // if time is greater than 0, print t-minus the time
    if (time > 0) {
      return "T-minus " + time + "...";
    }
    // if time is equal to 0, print blast off
    else if (time === 0) {
      return "Blast Off!";
    }
    // otherwise rockets are already gone
    else {
      return "Rockets already gone, bub!";
    }
  };
};

var countdown = countdownGenerator(3);

//Test logs

console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!