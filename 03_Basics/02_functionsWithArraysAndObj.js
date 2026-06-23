// function calculate(num1){
//     return num1;
// }
// console.log(calculate(3,4,5))//3
//using rest operator
function calculate(...num1){
    return num1;
}
console.log(calculate(3,4,5))//[ 3, 4, 5 ]

// function withObj(anyObj){
//     console.log(`The username is ${anyObj.username} and the price is ${anyObj.price}`)
// }

// let user={
//     username:"hdgao",
//     price:90
// }
// // we call this function by two methods:
// // by using an object
// withObj(user);//The username is hdgao and the price is 90
// // by creating an object at the call time
// withObj({
//     username:"shsad",
//     price:78669
// })//The username is shsad and the price is 78669

// array:
let array=[1,35,5,8]
function return2nd(getArray){
    return getArray[1]
}
console.log(return2nd(array))//35