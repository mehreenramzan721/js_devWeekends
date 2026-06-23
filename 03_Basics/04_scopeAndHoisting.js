// function one(){
//     const username="abcdef";
//     function two(){
//         const website="youtube"
//         console.log(username)
//     }
//     // console.log(website)//error as we cant access a variable outside the scope
//     two()
// }
// one();

if(true){
    const username="aabbcc"
    if(username==="aabbcc"){
        const website=" youtube"
        console.log(username+website)
    }
    // console.log(website)// errror
}
// console.log(username)//error

console.log(one(5))
function one(num){
    return num
}

// console.log(three(5))// error

const three=function(num){
    return num;
}
console.log(three(5))// 5
