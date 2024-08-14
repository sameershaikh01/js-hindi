// singleton 
//Object.create

// Object literals

const mySym = Symbol("key1")

const car = {
    type:"Fiat",
    model:"500",
    [mySym] :"mykey", // to add symbol in object use sqr bracket  
    color:"white"
};

// access object 
console.log(car.type); // output fiat
console.log(car["type"]); // output fiat

// Create an Object
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

console.log(person);

// Create an Object
//const personn = new Object();

// personn.firstName = "John";
// personn.lastName = "Doe";
// personn.age = 50;
// personn.eyeColor = "blue";

// console.log(personn)

// object freez property 

//  Object.freeze(person)  No Change allow in person after freez()

// add function into the object
person.greeting = function () {
   return console.log("hello Object")
}

console.log(person.greeting())


