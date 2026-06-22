const arr1=[1,2,3,4,5,7]
const arr2=["y","z","a","c"]
arr1.push(arr2)
console.log(arr1)//[ 1, 2, 3, 4, 5, 7, [ 'y', 'z', 'a', 'c' ] ]
// arr1.concat(arr2)
// console.log(arr1)//[ 1, 2, 3, 4, 5, 7, [ 'y', 'z', 'a', 'c' ] ]
// arr3=arr1.concat(arr2)
// console.log(arr3)//[ 1, 2, 3, 4, 5, 7, [ 'y', 'z', 'a', 'c' ], 'y', 'z', 'a', 'c' ]
// const array1=[1,2,3,5]
// const array2=[12,34,56,67]
// const array4=[...array1,...array2]
// console.log(array4)/*[
//    1,  2,  3,  5,
//   12, 34, 56, 67
// ]*/

const array_1=[1,2,3,[3,4,5,[7,4,5,5],8,3,4,8],2,3,5]
arr=array_1.flat(Infinity)//Infinity can check until there is no multiple array lft , we can also add the depth to which we want to reduce like to make a single array in the above case the depth will be 2
console.log(arr)/*[
  1, 2, 3, 3, 4, 5, 7,
  4, 5, 5, 8, 3, 4, 8,
  2, 3, 5
]*/

//check if the element is array?
console.log(Array.isArray("Ali"))//false
//make the word or anything array
console.log(Array.from("Ali"))//[ 'A', 'l', 'i' ]

console.log(Array.from({name:"Mehr"}))//[] empty array

let a1=20
let a2=16
let a3=89
console.log(Array.of(a1,a2,a3))//[ 20, 16, 89 ]