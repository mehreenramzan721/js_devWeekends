// console.log("M")
// console.log("e")
// console.log("h")
// console.log("r")
//if we have to do this work again and again.we can use an easier method that is use function

// function MyName(){
//     console.log("M");
//     console.log("e");
//     console.log("h");
//     console.log("r");
// }
// MyName();
// MyName;// no error

// function addTwoNums(num1,num2)
// //num 1 and num 2 here are parameters
// {
//     console.log(num1+num2)
// }
// addTwoNums();//NaN
// //WHY? because we didnt pass any argument

// function add1(n1,n2){
//     console.log(n1+n2)
// }
// add1(5,7)// now we have pass the arguments// 12 
// const result=add1(12,13)//25
// console.log(result)//undefined
//why?? because we are returning nothing in our function we are just printing

function add1(n1,n2){
    return (n1+n2)
}
const result=add1(12,13)//25
console.log(result)//25

function LoginUserMessage(userName){
    return `${userName} just logged in`
}

console.log(LoginUserMessage("Mehreen"))

