const coding=["js","c++","rubie","python"]

// const code=coding.forEach((item)=>{
//     console.log(item)
// })
// console.log(code)// undefined

// const code=coding.forEach((item)=>{
//    console.log(item)
//    return item;
// })
// console.log(code)// undefined


// filter
// const num=[1,2,3,4]
// num.filter((num)=>(num>2){
//     console.log(num)
// })// error
// why?? because we should return something like:
// const num=[1,2,3,4]
//    num.filter((num)=>{
//     console.log(num)
// })// error
//    num.filter((num)=>{
//    console.log(num)
//    return num;
// })// 1 2 3 4


// num.filter((num)=>(num>2))// return nothing
// const Great= num.filter((num)=>(num>2))
// console.log(Great)//[ 3, 4 ]


// filter usage:
const books=[{
    title:"abc",
    publish: 2000
}
,
{
    title:"def",
    publish: 2001
},
{
    title:"pqr",
    publish: 2004
},
{
    title:"mno",
    publish: 2005
},
{
    title:"jkl",
    publish: 2003
},
{
    title:"ghi",
    publish: 2001
}]

const book=books.filter((item)=>(item.publish==2001)
)
console.log(book)//[ { title: 'def', publish: 2001 }, { title: 'ghi', publish: 2001 } ]


