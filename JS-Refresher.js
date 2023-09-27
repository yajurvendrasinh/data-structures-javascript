/* 
Working with variables
importance: 2
Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”).
*/

let admin
let name = 'John';

admin = name;

/*
Giving the right name
importance: 3
Create a variable with the name of our planet. How would you name such a variable?
Create a variable to store the name of a current visitor to a website. 
How would you name that variable?
 */

let ourPlanetName = 'EARTH';
let currentUser = "John";

// String declarations 
let greetings = 'Hello';

let statement = `${greetings} ${name}`;
console.log(statement); // 'Hello John'

// Create a web-page that asks for a name and outputs it. (use alert, confirm, prompt)

question = prompt(`What is your name`);
alert ('your name is :' + `${question}`);