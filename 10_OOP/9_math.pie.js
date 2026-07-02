// const descriptor =Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(descriptor);
/*{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/
// console.log(Math.PI)// 3.14
// Math.PI= 5
// console.log(Math.PI)//3.14

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log("Chai nahi bni");
    }
}
// console.log(chai)
/*
{ name: 'ginger chai', price: 250, isAvailable: true }

*/


// console.log(Object.getOwnPropertyDescriptor(chai,"name"))
/*
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}*/

Object.defineProperty(chai,"name",{
    writable :false,
    enumerable : false
})

// console.log(Object.getOwnPropertyDescriptor(chai,"name"))
/*
{
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
}*/

// for (let[key,value] of chai) {
//     console.log(`${key}: ${value}`)
// }//TypeError: chai is not iterable
// for (let[key,value] of Object.entries(chai)) {
//     console.log(`${key}: ${value}`)
// }
// price: 250
// isAvailable: true

// we try to add a function within our chai object
// for (let[key,value] of Object.entries(chai)) {
//     console.log(`${key}: ${value}`)
// }
/*price: 250
isAvailable: true
orderChai: function(){
        console.log("Chai nahi bni");
    }
*/

for (let[key,value] of Object.entries(chai)) {
    if(typeof value!== 'function'){
    console.log(`${key}: ${value}`)
    }
}

