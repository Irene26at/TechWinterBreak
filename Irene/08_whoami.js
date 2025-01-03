// Question 8: Write a function that takes a variable as a parameter and returns its type
// Return the type as a string (e.g., "number", "string", "object", etc.).

function getType(variable) {
  // Write code here
      return typeof(variable);
}


console.log(getType(5)); 
// Expected Output: number
console.log(getType("Hello")); 
// Expected Output: string
console.log(getType([1, 2, 3])); 
// Expected Output: object
console.log(getType({ name: "Alan" })); 
// Expected Output: object
console.log(getType(undefined)); 
// Expected Output: undefined
console.log(getType(true)); 
// Expected Output: boolean
