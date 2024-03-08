//task2.1
let userInput1 = prompt("Enter the firstname:");
let userInput2 = prompt("Enter the lastname:");

let user1 = userInput1;
let user2 = userInput2;

//task2.2
let Strings = user1 + " " + user2;
console.log("Concatenated String:", Strings);

//task2.3
let exampleString = "Hi, I'm Loui Fuentes";

let stringLength = exampleString.length;
console.log("String Length:", stringLength);

let uppercaseString = exampleString.toUpperCase();
console.log("Uppercase String:", uppercaseString);

let lowercaseString = exampleString.toLowerCase();
console.log("Lowercase String:", lowercaseString);

let substring = exampleString.substring(7, 13);
console.log("Substring:", substring);

//task2.4
let name = "Loui";
let age = 21;

let message = `My name is ${name} and I am ${age} years old.`;
console.log(message);

//task2.5
let stringA = "loui";
let stringB = "fuentes";

if (stringA === stringB) {
  console.log("The strings are equal.");
} else {
  console.log("The strings are not equal.");
}

//task2.6
let names = "loui,jesse,warren";
let nameArray = names.split(",");
console.log("Name Array:", nameArray);



