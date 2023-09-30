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

visitorName = prompt(`What is your name`);
question = confirm('Are you 18 years old')
alert ('your name is : ' + `${visitorName}` + question);

/** 
* Write the code which asks for a login with prompt.

* If the visitor enters "Admin", then prompt for a password, 
* if the input is an empty line or Esc – show “Canceled”, 
* if it’s another string – then show “I don’t know you”.

The password is checked as follows:

* If it equals “TheMaster”, then show “Welcome!”,
* Another string – show “Wrong password”,
* For an empty string or cancelled input, show “Canceled”

**/ 

loginUser = prompt('Enter your role for login');


if (loginUser === 'Admin') {
  adminPassword = prompt ('Enter admin password');
  
  (adminPassword === 'TheMaster') ? alert('Welcome') : alert('Wrong Password');
}
else if (typeof loginUser === 'string') {
  alert('I don’t know you')
}
else {
  alert('Cancled')
}

// LOOPS:
/**
 * Use the for loop to output even numbers from 2 to 10.
 */

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log( i );
    }
  }

//   nullish coalescing operator (??) vs OR (||)

console.log(12 || "not found") // 12
console.log(0  || "not found") // "not found"
console.log(""     || "not found") // "not found"
console.log(false || "not found") // "not found"
console.log(undefined || "not found") // "not found"
console.log(null      || "not found") // "not found"

console.log(12 ?? "not found") // 12
console.log(0  ?? "not found") // 0
console.log(""     ?? "not found") // ""
console.log(false ?? "not found") // false
console.log(undefined ?? "not found") // "not found"
console.log(null      ?? "not found") // "not found"

// ================================= //
/**
 * FUNCTION NAMING, ONE FUNCTON ONE ACTION
 * Function starting with…

    "get…" – return a value,
    "calc…" – calculate something,
    "create…" – create something,
    "check…" – check something and return a boolean, etc.

    Examples of such names:

    showMessage(..)     // shows a message
    getAge(..)          // returns the age (gets it somehow)
    calcSum(..)         // calculates a sum and returns the result
    createForm(..)      // creates a form (and usually returns it)
    checkPermission(..) // checks a permission, returns true/false
 */

    // Function Declaration
function sum(a, b) {
    return a + b;
  }

  // Function Expression
let sum = function(a, b) {
    return a + b;
  };