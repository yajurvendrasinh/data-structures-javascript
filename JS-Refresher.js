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