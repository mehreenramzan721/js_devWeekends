// // by literals
// let JSUser={
//     name: "Mehr",
//     "full name": "Mehreen Ramzan",
//     age:19,
//     location:"Lahore",
//     isLoggedIn: true,
//     LastLoggedIn:["Monday", "Thursday"]
// }
// console.log(JSUser.name)//Mehr
//console.log(JSUser[name])// gives a error as it is maintained as a string we have to write it like:
// console.log(JSUser["name"])//Mehr

//console.log(JSUser.full name)// error 
// console.log(JSUser["full name"])

//let MySym={
//     mySym=""
// }
//console.log(MySym.mySym)// gives error 
// myS=Symbol("hsd")
// let ms={
//     myS:"Key 1"
// }
// console.log(ms.myS)//Key 1 
// console.log(typeof ms.myS)//string

myS=Symbol("hsd")
let ms={
    [myS]:"Key 1",
    name:"Mehr"
}
console.log(ms.myS)//undefined 
console.log(typeof ms.myS)//undefined

console.log(ms[myS])//Key 1
console.log(typeof ms[myS])//Symbol

ms.name="Ali"
console.log(ms.name)//Ali
// Object.freeze(name)
// ms.name="Alis"
// console.log(ms.name)//error

// console.log(ms)//{ name: 'Ali', [Symbol(hsd)]: 'Key 1' }

// ms.greetings=function(){
//     console.log("Hello ms user")
// }
// ms.greetings()//Hello ms user
// console.log(ms.greetings)//[Function (anonymous)]
// console.log(ms.greetings())//undefined

ms.greetings=function(){
    console.log(`Hello ms user1${this.name}`)
}
ms.greetings()//Hello ms user1Ali
console.log(ms.greetings)//[Function (anonymous)]
console.log(ms.greetings())//undefined