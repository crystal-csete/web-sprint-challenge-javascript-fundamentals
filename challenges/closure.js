// ==== Closures ==== 



/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

  // nestedFunction can access the variable internal because that nestedFunction is in the other function's scope (myFunction)or block scope. It is inbetween the curly braces, so nestedFunction is in the scope of myFunction, even though internal is above it.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */



function summation(num1){
  for (let i=0;i < num1; i++);
  return num1 + i;
};
console.log(summation(4));

