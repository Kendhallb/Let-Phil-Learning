//  function greet()  {
//     console.log("HELLO, welcome to javascript");
//  }

//  greet(); //calling the function

// function greetUser(name) {
// console.log(`Hello, ${name}!`);
// }

// greetUser("Alice");
// greetUser("Bob");
// greetUser("Charles");

// function addNumbers(num1, num2, num3) {
//     console.log(`Sum: ${num1 + num2 + num3}`);
// }

// addNumbers(1, 2, 3); // Output: 6
// addNumbers(5, 10); // Output: 15
// addNumbers(10, 10); // Output: 20

// function multiply(x, y) {
//     return x * y;
// }

// const result = multiply(4, 5);
// console.log(result);

// const greet = function(name) {
//     return `Hello, ${name}`;
// }

// console.log(greet ("Alice"));

// Arrow Functions (Shorter Syntax)

// const square = (num) => num ** 2;

// console.log(square(5)); //Output: 25

// () => {}
// const multiply = (a, b) => {
//     return a * b;
// }; // curly braces for multiple lines, return must be inside

// const multiply = (a, b) => a * b; // no curly braces

// console.log(multiply(3, 4)); // Output: 12

//Function Scope and Hoisting

// let globalVar = "Iam global";

// function testScope() {
//     let localVar = "I exist ony in this function";
//     console.log(globalVar); // works
    // console.log(localVar); // works
// }

// testScope();
// console.log(globalVar); // works
// console.log(localVar); // error , only exists inside the function testScope

// hello();

// function hello() {
//     console.log("Hello from a function declaration");
// }

// const greet = function() {
//     console.log("Hello from a function expression");
// }

// greet();