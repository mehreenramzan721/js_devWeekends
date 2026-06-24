const myNums=[1,2,3]
// const num= myNums.reduce(function(acc,currVal){
//     return acc+ currVal
// },0)
// console.log(num)//6

const num=myNums.reduce((acc, currVal)=> acc+currVal,0 )
console.log(num)//6