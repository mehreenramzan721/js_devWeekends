const coding=["js","c++","rubie","python"]
// coding.forEach(function (value){
//     console.log(value)
// })//js c++ rubie python

// coding.forEach((value)=>{
//     console.log(value)
// })//js c++ rubie python
function PrintMe(){
    console.log("H")
}
coding.forEach((value)=>{
    console.log(value)
})//js c++ rubie python

coding.forEach(PrintMe)// H H H H

// the for each loop have many other things too
coding.forEach((value,index,array)=>{
    console.log(array,value,index)
})
/*
[ 'js', 'c++', 'rubie', 'python' ] js 0
[ 'js', 'c++', 'rubie', 'python' ] c++ 1
[ 'js', 'c++', 'rubie', 'python' ] rubie 2
[ 'js', 'c++', 'rubie', 'python' ] python 3
 */
