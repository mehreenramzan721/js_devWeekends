let tinderUser=new Object()
//console.log(tinderUser)//{}

let obj={
    name:"mehr",
    fullname:"Mehreen Ramzan",
    others:{
        age: 19, 
        email: "abs@gmail.com"
    }
}
// console.log(obj.others.age)//19

let obj2={1:2, 2:3}
let obj3={3:7, 8:9}
//obj4={obj2,obj3}
//console.log(obj4)//{ obj2: { '1': 2, '2': 3 }, obj3: { '3': 7, '8': 9 } }
// const obj=Object.assign(obj2,obj3)
// console.log(obj)//{ '1': 2, '2': 3, '3': 7, '8': 9 }
// console.log(obj2)//{ '1': 2, '2': 3, '3': 7, '8': 9 }
// obj9={...obj2,...obj3}
// console.log(obj9)//{ '1': 2, '2': 3, '3': 7, '8': 9 }


//most used syntex when we use data base:
users=[
    {name: "ali",
    age:17},{
    name: "ali",
    age:17
},
{
    name: "ali",
    age:17
},
{
    name: "ali",
    age:17,
},
{
    name: "ali",
    age:17
},
{
    name: "ali",
    age:17
}]
console.log(users[3].age)//17

console.log(obj)
/*{
  name: 'mehr',
  fullname: 'Mehreen Ramzan',
  others: { age: 19, email: 'abs@gmail.com' }
}*/
console.log(Object.keys(obj))//convert the object intothe array and then we can use array methods in it
/*
[ 'name', 'fullname', 'others' ]*/

console.log(Object.values(obj))
//[ 'mehr', 'Mehreen Ramzan', { age: 19, email: 'abs@gmail.com' } ]
console.log(Object.entries(obj))
/*[
  [ 'name', 'mehr' ],
  [ 'fullname', 'Mehreen Ramzan' ],
  [ 'others', { age: 19, email: 'abs@gmail.com' } ]
]*/
console.log(obj.hasOwnProperty('name'))//true