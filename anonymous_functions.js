// Tasks: 1. Create an anonymous function that takes two numbers as parameters and returns their sum.
//    Example Input: 3, 5
//    Example Output: 8

// Task 1 Answer
// if task 1 and 2 at a same time run then answer is different. So one task 1 or 2 command then run

function anonymous_functions() {
    // Create an anonymous function that takes two numbers as parameters and returns their sum.
    const sumFunction = (num1, num2) => {
      return num1 + num2;
    };
  
    // Call the sumFunction and print the result.
    const sum = sumFunction(3, 5);
    console.log(sum);
  }
  
  anonymous_functions();




// Task  2. Create an array of numbers and use the `map()` method with an anonymous function to square each number in the array.
//   Example Input: [1, 2, 3, 4, 5]
//   Example Output: [1, 4, 9, 16, 25]


//   Task 2 Answer

function anonymous_functions() {
    // Create an array of numbers.
    const numbers = [1, 2, 3, 4, 5];
  
    // Use the map() method to square each number in the array.
    const squaredNumbers = numbers.map((number) => {
      return number * number;
    });
  
    // Print the squared numbers array.
    console.log(squaredNumbers);
  }
  
  anonymous_functions();




//   C. JavaScript arrow function 
// Step 1: Create the calculateSquare arrow function
// Step 2: Call the calculateSquare function with different numbers
// Step 3: Print the results to the console


// Answer
  function calculateSquare() {
  // Create a JavaScript arrow function called `calculateSquare` that takes a number as input and returns the square of that number.
  const calculateSquare = (number) => {
    return number * number;
  };

  // Call the `calculateSquare` function with the following numbers: 5, 8, and 12.
  const squareOf5 = calculateSquare(5);
  const squareOf8 = calculateSquare(8);
  const squareOf12 = calculateSquare(12);

  // Print the results to the console to display the squares of the numbers.
  console.log("The square of 5 is: " + squareOf5);
  console.log("The square of 8 is: " + squareOf8);
  console.log("The square of 12 is: " + squareOf12);
}

calculateSquare();

  