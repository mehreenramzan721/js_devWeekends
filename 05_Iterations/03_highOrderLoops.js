// for of loop:
// ["","",""]
// [{},{},{}]

// const arr=[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num)
// }//1 2 3 4 5

// const greetings="Hello world!"
// for(const greet of greetings){
//     console.log(greet)
// }

// Maps
const map=new Map()
// map.set('Key','input')
map.set('In','India')
console.log(map)//Map(1) { 'In' => 'India' }
// lets try to add india again
map.set('In','India')
console.log(map)
//Map(1) { 'In' 
// => 'India' }

// for of loop:
// for(const [key, value] of map){
//     console.log(key + "=> "+value)
// }//In=> India  

// for of loop on object

// const obj={
//     name: "Mehr",
//     age:19
// }
// for(const object of obj){
//     console.log(object)
// }//TypeError: obj is not iterable