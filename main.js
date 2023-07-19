// মডিউল ২ এর এসাইনমেন্ট

A. ES6 function returns
--------------------------------
Instructions:
1. Create a JavaScript program that explores the usage of ES6 function returns.
2. Implement the provided code snippets and answer the questions related to each snippet.
3. Ensure that the program runs without errors and provides the correct output.

Requirements:
1.. Write your answers to the questions as comments in the code.

Snippet 1 :

const add = (a, b) => {
  return a + b;
};
const result1 = add(3, 4);

// Question 1: What is the value of the result1?

 Snippet 2 :

const greet = (name) => {
  return {name};
};
const message = greet("Alice");

// Question 2: What is the value of the message?

Snippet 3 :

const calculateArea = (radius) => {
  const PI = 3.14159;
  const area = PI * radius * radius;
  return area;
};
const area = calculateArea(5);

// Question 3: What is the value of area?

Snippet 4 :

const multiply = (a, b) => a * b;
const result2 = multiply(2, 5);

// Question 4: What is the value of the result2?

Snippet 5 :

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
const evenNumber = isEven(8);

// Question 5: What is the value of evenNumber?

Snippet 6 :

const sayHello = () => {
  return "Hello!";
};
const hello = sayHello();

// Question 6: What is the value of hello?

Snippet 7 :

const calculateSquare = (num) => num * num;
const squaredNumber = calculateSquare(4);

// Question 7: What is the value of squaredNumber?

Snippet 8 :

const divide = (a, b) => {
  if (b === 0) {
    return "Error: Division by zero.";
  }
  return a / b;
};
const result3 = divide(10, 2);
const result4 = divide(8, 0);

// Question 8: What are the values of result3 and result4?

B. Anonymous functions
-----------------------------------

Instructions:
1. Create a new JavaScript file named `anonymous_functions.js`.
2. Write JavaScript code to solve the following tasks using anonymous functions.
3. Use anonymous functions where specified.
4. Test your code by running the file in a web browser or a JavaScript runtime environment.

Tasks:
1. Create an anonymous function that takes two numbers as parameters and returns their sum.
   Example Input: 3, 5
   Example Output: 8

2. Create an array of numbers and use the `map()` method with an anonymous function to square each number in the array.
   Example Input: [1, 2, 3, 4, 5]
   Example Output: [1, 4, 9, 16, 25]

C. JavaScript arrow function 

Instructions:
1. Create a JavaScript arrow function called `calculateSquare` that takes a number as input and returns the square of that number.
2. Call the `calculateSquare` function with the following numbers: 5, 8, and 12.
3. Store the results in separate variables.
4. Print the variables to the console to display the squares of the numbers.

Your task is to write the JavaScript code for the above instructions.
Tasks:

// Step 1: Create the calculateSquare arrow function
// Step 2: Call the calculateSquare function with different numbers
// Step 3: Print the results to the console

Submission Instruction :
*** Submit your all file as a pdf once you have completed the tasks. ***