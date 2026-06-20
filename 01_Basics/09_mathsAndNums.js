const score=500
console.log(score)//500
let num=new Number(600)
console.log(num)//[Number: 600]
// methods of numbers:
console.log(num.toString())// now its converted to string and now we get a the access to the methods of strings 
console.log(num.toString().length)//3

console.log(num.toFixed(1))

let n=13476.89
let m=123.67
console.log(n.toPrecision(2))//1.3e +4
console.log(m.toPrecision(3))// 124 rounded of 123.67 to 124
let a=12678
console.log(a.toLocaleString())//12,678 

//*********************maths***************/

console.log(Math)// object in itself
console.log(Math.abs(-1))//1
console.log(Math.round(2.6))//3
console.log(Math.ceil(6.6))//7
console.log(Math.floor(6.6))//6
console.log(Math.min(6,23,9,0))//0
console.log(Math.max(6,23,9,0))//23
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+ min)//very important formula
