// class User {
//     constructor(email, password){
//         this.email = email;
//         this.password = password
//     }

//     get email(){
//         return this._email.toUpperCase()
//     }
//     set email(value){
//         this._email = value
//     }
//     get password(){
//         return this._password.toUpperCase()
//     }

//     set password(value){
//         this._password = value
//     }

// }

// const Mehr= new User("mehreeen","dzlgudsls", "adru");
// console.log(Mehr.password);//DZLGUDSLS
// console.log(Mehr)
// /*
// User { _email: 'mehreeen', _password: 'dzlgudsls' }
// */


class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password} mehr`;
    }

    set password(value){
        this._password = value
    }

}
const Mehr= new User("mehreeen","dzlgudsls", "adru")
console.log(Mehr.password)//dzlgudsls mehr
console.log(Mehr)