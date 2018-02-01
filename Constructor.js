function User(firstname, lastName, age, gender) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.gender = gender;
}

var user_one = new User("John", "Smith", 26, "male");
var user_hundred = new User("jill", "robinson", 25, "female");


/*prototype object*/

User.prototype.printFirst = function () {
	return this.firstName;
}
