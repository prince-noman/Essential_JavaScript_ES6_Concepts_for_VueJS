//=======================================
// Essential JavaScript ES6 Concepts
//=======================================

//======================
// JavaScript Variables
//======================

// Var
// var a = 5; // X
// a = 6;
// var a = 8;
// console.log(a);

// Let
// let b = 6;
// b = 7;
// console.log(b);

// Const
// const c = 7;

//======================
// Template Literals:
//======================

// const name = "prince";
// const greet = `Hello ${name}`;
// console.log(greet);

//======================
// Arrow Functions:
//======================

// Normal Function
// function sum() {
//   return 5 + 10;
// }
// console.log(sum());

// Arrow Function
//================

// Basic Syntax
// const add = (a, b) => a + b;
// console.log(add(5, 2));

// Parentheses for Single Parameter:
// const multiply = x => x * x;
// console.log(multiply(5));

//No Parameters:
// const greet = () => "Hello Prince";
// console.log(greet());

//Block Body
// const sub = (a, b) => {
//   res = a - b;
//   return res;
// };
// console.log(sub(5, 3));

//Arrow Functions as Arguments:
// const nums = [1, 2, 3];
// const squared = nums.map((num) => num * num);
// console.log(squared);

//======================
// Ternary Operator ( ? : ):
//======================

// const age = 20;
// const isAdult = age >= 18 ? "Adult" : "Young";
// console.log(isAdult);

//======================
// Nullish Coalescing Operator ( ?? ):
//======================

// const userInput = "Prince";
// const username = userInput ?? "Defult User";
// console.log(username);

//======================
// Short Circuit
//======================

// Logical AND Operator ( && )

// const a = true;
// const b = false;
// const result = a && b;
// console.log(result);

// Logical OR Operator ( | | ):

// const x = false;
// const y = "hello";
// const res = x || y;
// console.log(res);

//======================
// Object
//======================

// const person = {
//   firstName: "prince",
//   lastName: "noman",
//   age: 28,
//   greet: function () {
//     console.log("Hello " + this.firstName + " " + this.lastName);
//   },
// };
// const fname = person.firstName;
// console.log(fname);
// console.log(person.lastName);
// person.age = 50;
// console.log(person.age);

// person.greet();

// const car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2020,
// };
// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(Object.entries(car));

//======================
// Destructuring Assignment:
//======================

// Array destructuring

// const numbers = [1, 2, 3, 4];
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// const [first, second] = numbers;
// console.log(first);
// console.log(second);

// Obj ect destructuring
// const person = {
//   name: "Prince",
//   age: 28,
//   profession: "Developer",
// };
// console.log(person.profession);
// console.log(person.age);
// console.log(person.name);
// const { age, name, profession } = person;
// console.log(age);
// console.log(name);
// console.log(profession);

//======================
// Spread Operator
//======================

// const numbers = [1, 2, 3, 4];
// const newNumbers = [...numbers, 5, 6, 7];
// console.log(newNumbers);

//======================
// Fetch API with async/await
//======================

// async function fetchData() {
//   try {
//     // Fetch data from API URL
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     // Error handling
//     if (!response.ok) {
//       throw new Error("Something went wrong");
//     }
//     // Parse the response body as JSON
//     const data = await response.json();

//     // Process the JSON data
//     console.log(data);
//   } catch (error) {
// Handle errors
//     console.log("Fatal Error", error);
//   }
// }

// Call the async function
// fetchData();

//======================
// Map Method
//======================

// const numbers = [1, 2, 3];
// const squaredNumber = numbers.map((num) => num * 2);
// console.log(squaredNumber);
