// function chai(){
//     console.log("DB connected")
//     console.log("hello")
// }
// chai();
// chai()

// (function chai(){
//     console.log(`DB connected`)
// })()//DB connected

// (()=> {
//     console.log("Mehreen")
// })()// no output or error
// (function h(){
//     console.log("Mehr")
// })()// error

//=====we have to use semicolon after function call to stop it====
(function chai(){
    console.log(`DB connected`)
})();//DB connected

(()=> {
    console.log("Mehreen")
})();
(function h(){
    console.log("Mehr")
})();

((user)=> {
    console.log(`Mehreen ${user}`)
})("Ramzan");// Mehreen Ramzan