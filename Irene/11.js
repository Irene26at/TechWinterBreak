// Question 11: Complete the function that takes an object with properties `name` and `age`. 
// The function should print a string that says "Name: [name], Age: [age]".


function printPersonDetails(person) {
  // Write code here
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

printPersonDetails({ name: "Alice", age: 25 }); 
// Expected Output: Name: Alice, Age: 25
printPersonDetails({ name: "Bob", age: 30 }); 
// Expected Output: Name: Bob, Age: 30
