const user={
    username:"abcdefg",
    price: "999",
    isLoggedIn: true,
    welcomeMessage: function(){
        console.log(`welcome to website ${this.username}`)
        console.log(this)
    }


}
// user.welcomeMessage();//welcome to website abcdefg
// due to this we get an extra message:
/*{
  username: 'abcdefg',
  price: '999',
  isLoggedIn: true,
  welcomeMessage: [Function: welcomeMessage]
}*/
// user.username="xyzabc"// in this line we chnage the current context and in next line we get this value is du to this keyword
// user.welcomeMessage();//welcome to website xyzabc
// same here just we get username changed

// console.log(this)//{}



// when we print this inside a function:
// function hi(){
//     console.log(this)
// }
// hi();
/* get a very long message:
<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 31.986325999721885,
      nodeStart: 3.271383000537753,
      v8Start: 6.157426999881864,
      bootstrapComplete: 25.482963000424206,
      environment: 13.793402999639511,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1782216681353.441
  },
  fetch: [AsyncFunction: fetch]
}
  */



// function hi(){
//     let username="mhsj"
//     console.log(this.username)
// }
// hi();//undefined

// const h=()=>{
//     let username="mhsj"
//     console.log(this)//{}
//     console.log(this.username)//undefined
// }
// h();// undefined

// implicit return
const add=(num1, num2)=>(num1+num2)
console.log(add(1,2))//3

const a=(obj)=> {user:"abc"}
console.log(a(user))// undefined