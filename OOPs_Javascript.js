/*Simple Inheritance and Encapsulation 
 * Using OBJECTS
 */


 var car = {
 	MAKE : "Mercedes",
 	TYPE : "Sedan",
 	FIRING_NOISE : function () {
 		console.log("zoooooommmm....");
 	}
 };

 var c_type = Object.create(car);

 // console.log(c_type.MAKE) => returns Mercedes
 // "car" is the parent of the c_type


 /* Using Constructor method*/ 

 function Car() {
 	this.make = "mercedes";
 	this.type = "sedan";
 	this.firing_noise = function () {
 		console.log("zooommmmmmmmmmmm");
 	};
 }

 var s_type = new Car();

 s_type.firing_noise(); // console.logs => "zooommmmmmmmmmmm"



 /* Lets take another example*/

 function Plant(){
    this.country = "india";
    this.isOrganic = true;
}
// end Plant constructor

function Fruit(name){
    this.name = name;
    this.whereItGrows = function() {
      console.log("it grows in " + this.country);  
    };
}

// end fruit constructor

Plant.prototype.amIhealthy = function() {
    console.log("I am super healthy");
};

Fruit.prototype = new Plant(); // make Plant prototype for Fruit // or Object.setPrototypeOf(Fruit, PLant)

var banana = new Fruit("banana");
var basil = new Plant();
console.log(basil.country);
console.log(banana.country); // even if the immediate parent "Fruit" dosent have the "country", banana goes to its grandfather and asks about country and gets the ansewer \\m// awesome
console.log(banana.isOrganic); // logs "true"
console.log(banana.name);
banana.whereItGrows();
banana.amIhealthy();