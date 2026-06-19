//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
let type="Name"
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// both are shown same but they are not same when we compare them 
console.log(id === anotherId);
console.log(id);
console.log(anotherId);
// but when we print values tehy are same

// const bigNumber = 3456543576654356754n
// to represent bigNumber its better to writ small n at last of the number
// Reference (Non primitive)
// Array, Objects, Functions

const heroes = ["ali", "hdsb", "ddsb"];
// we can also just write the code in {} with writing this:
//let myObj =
let myObj = {
    name: "mehr",
    age: 22,
}
const myFunction = function(){
    console.log("Hello world");
}
// typeof is a function
console.log(typeof anotherId);
myFunction();
console.log(typeof myFunction);//function
console.log(typeof myObj);//object
console.log(typeof heroes);// object
