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
    isAvailable: true
}
// console.log(chai)
/*
{ name: 'ginger chai', price: 250, isAvailable: true }

*/


console.log(Object.getOwnPropertydescriptor(chai))