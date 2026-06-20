// let array=[1,2,4,"sdd"]
// console.log(array[0])//1
// // array methods
// console.log(array)//[ 1, 2, 4, 'sdd' ]

// array.push(17)//simple push an element at end of array
// console.log(array.push(62))// note that it will display the length 6 not the pushed num
// console.log(array.values())
// array.pop()// remove the last element  from array
// array.unshift(66)// push the element at the start of array
// console.log(array)//[ 66, 1, 2, 4, 'sdd', 17 ]
// array.shift()
// console.log(array)//[ 1, 2, 4, 'sdd', 17 ]
// console.log(array.includes(7))
// console.log(array.indexOf(4))

// let array1=array.join()
// console.log(array1)//1,2,4,sdd,17 ( default , we can use - or any other)
// console.log(typeof array1)// string
// slice and splice
let arr=[1,2,3,4,5]
const m1=arr.slice(1,3)//include index 1 and index 2 element
console.log(m1)//[ 2, 3 ]
console.log(arr)//[ 1, 2, 3, 4, 5 ]
let m2=arr.splice(1,3)//include index 1 to index 3 index 3 will be included too
console.log(arr)//[ 1, 5 ]
console.log(m2)//[ 2, 3, 4 ]
