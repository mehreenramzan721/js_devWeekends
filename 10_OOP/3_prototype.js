// let myName= "Mehreen     "
// console.log(myName.length)// 12

let myName= "Mehreen     "
console.log(myName.trim().length)// 7   but not much recommended


let myHeros= ["thor", "spiderman"]

let heroPower= {
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.mehr= function(){
    console.log(`mehreen is present in all objects`);
}
Array.prototype.heyMehr = function(){
    console.log(`Mehreen says hello`);
}

// heroPower.mehr()
// myHeros.mehr()
// myHeros.heymehr()
// heroPower.heymehr()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport= {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"mehr".trueLength()
"iceTea".trueLength()