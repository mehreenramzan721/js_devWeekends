// // after ES6

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`;
    }
        changeUsername(){
            return `${this.username.toUpperCase()}`;
    }
}
const chai = new User('chai', 'chai@gmail.com', '123')
console.log(chai)
/*
User { username: 'chai', email: 'chai@gmail.com', password: '123' }
*/

console.log(chai.encryptPassword())//123abc
console.log(chai.changeUsername())//CHAI

// behind the scene if we did 
// not have the classes

// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPassword = function() {
//     return `${this.password}abc`;
// }
// const hi= new User('hi', 'hi@gmail.com', '1 5 6')
// console.log(hi)
// console.log(hi.encryptPassword())//1 5 6abc