// let username="abc@gmail.com"
// if(username){
//     console.log("TRUE")
// }else{
//     console.log("False")
// }// TRUE

// let username=""
// if(username){
//     console.log("TRUE")
// }else{
//     console.log("False")
// }// False

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

//Nullish Coalescing Operator(??): null and undefined
let val1;
// // val1=5??10
// val1=null??10
// console.log(val1)//10

// val=null?? 10?? 20
// console.log(val)//10

// terniary operator
// condition? true: false
const price=100
price>=80?console.log("Yes"):console.log("No")
//Yes