// const promiseOne= new Promise(function(resolve, reject){
//     // do an async task 
//     //db calls
//     //cryptography
//     setTimeout(function(){
//         console.log("Async task is completed ")
//         resolve()
//     }, 1000)
// })
// promiseOne.then(function(){
//     console.log("Promise consumed")
// });
// // note that then has a direct relation with resolve
// new Promise(function(resolve, reject){
//     // do an async task 
//     //db calls
//     //cryptography
//     setTimeout(function(){
//         console.log("Async task 2 is completed ")
//         resolve()
//     }, 1000)
// })
// .then(function(){
//     console.log("Promise consumed")
// });//Async task 2 is completed 
// //Promise consumed


// const promiseThree= new Promise(function(resolve , reject){
//     setTimeout(function(){
//         resolve({username:"Mehreen", email:"mehreen@gmail.com" },1000)
//     })
// })
// promiseThree.then(function(data){
//     console.log(data)//{ username: 'Mehreen', email: 'mehreen@gmail.com' }
// })

// const promiseFour= new Promise(function(resolve , reject){
//     setTimeout(function(){
//         // let error = true 
//         let error = false
//         if(! error){
//             resolve({username:"Mehr",password : " 123"})
//         }else{
//             reject("Error : something went wrong ")
//         }
//     },1000)
// })
// promiseFour.then((user)=>{
//     console.log(user)
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch(function(error){
//     console.log(error)
// }).finally(()=> console.log("The promise is either resolved or rejected"))


// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true 
//         // let error = false
//         if(! error){
//             resolve({username:"Mehr",password : " 123"})
//         }else{
//             reject("Error : something went wrong ")
//         }
//     },1000)
// })

// async function consumePromiseFive( ){
//     // await promiseFive( )
//     const response= await promiseFive
//     console.log(response)
// }
// async function consumePromiseFive(){
//     try{
//         const response= await promiseFive
//         console.log(response)
//     }catch(error){
//         console.log(error)
//     }
// }

// consumePromiseFive()


// async function getAllusers (){
//     const response= await fetch("https://jsonplaceholder.typicode.com/users")
//     const data= response.json()
//     console.log(data)
// }
// getAllusers()

// async function getAllusers (){
//     try{
//     const response= await fetch("https://jsonplaceholder.typicode.com/users")
//     const data= await response.json()
//     console.log(data)
//     }catch( error){
//         console.log("E: ", error)
//     }
// }
// getAllusers()



fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// syntax of promise . all
Promise.all([promise1, promise2, promise3])
.then((results) => {
console.log(results) // array of all 3 results
})
.catch((error) => {
console.log(error) // if ANY one fails, whole thing fails
})