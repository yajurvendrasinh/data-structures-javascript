// Creating objects
let newObj = {};
let xObj = new Object();

let newObjAgain = Object.create(newObj); // will get all the properties of newObj

// Creating a prorotype ( encapsulation and inheritance )

let Person = {
  talk: function () {
    return `My namne is ${this.name}`;
  },
};
//   Encapsulate common props in Person for future persons to be created.
//  Inherit different props from the persons raj - viki etc
// creating two person from main prototype of Person as Viki and Raj
let Viki = Object.create(Person);
let Raj = Object.create(Person);

Viki.lift = 'weights';
Viki.name = 'Viki';
Raj.play = 'Guitar';
Raj.name = 'Raj';

Object.setPrototypeOf(Raj, Viki);
/*
  Object.setPrototypeOf takes in two object arguments and sets the 'second' object as
  the prototype of the 'first'. For example, calling Object.setPrototypeOf(Raj, Viki);
  sets up Viki as a prototype of Raj.
  setting Viki as prototype of raj so that raj can have access to props of viki
   Raj now has access to lift -> if you run Raj.lift , yoyu get 'weight
   */

//  prototype chain. example below

let Viru = { study: 'chemical', name: 'Viru' };

Object.setPrototypeOf(Viru, Raj);
console.log('lift' in Viru, Viru.name); // will provide TRUE
