const User = {
    _email: 'alidg@.com',
    _password: "abfsdd",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);//ALIDG@.COM