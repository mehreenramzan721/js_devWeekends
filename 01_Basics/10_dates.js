// let mydate=new Date()
// console.log(mydate)//2026-06-20T16:33:36.062Z
// console.log(mydate.toString())// Sat Jun 20 2026 16:33:36 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toLocaleString())//6/20/2026, 4:33:36 PM
// console.log(mydate.getFullYear())//2026
// console.log(mydate.toDateString())
// console.log(typeof mydate)
// // we can also create our own
// let mycreatedDate=new Date(2026,5,7)//we can add what we want like hours and mins too
// // console.log(mycreatedDate.toISOString())
// // console.log(mycreatedDate)

// // let mdate=new Date("2026-00-20")
// // console.log(mdate.getMonth())//NaN 
// let mytimeStamp=Date.now()
// console.log(mytimeStamp)// from 1 jan 1870 to now 1781974194978
// console.log(mycreatedDate.getTime())
// //conversion to s
// console.log(Math.round(Date.now()/1000))
let d= new Date(0,0,0)
// it will check the highest num and then move to minus 1
//like we have in total 12 months it will give 11 same is the case with others
console.log(d.getMonth())//11
console.log(d.getDay())//0
// in js day 0 is considered sunday
console.log(d.getDate())//31
console.log(d.getFullYear())//1899

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})