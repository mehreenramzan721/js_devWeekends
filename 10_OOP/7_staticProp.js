class User{
    constructor(username){
        this.username =username;
    }
    logMe(){
        console.log(`username: ${this.username}`)
    }
    static createId(){
        return `123`
    }
}
// const student= new User('Ali')
// console.log(student.createId())
//TypeError: student.createId is not a function 


class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}
const Teach= new Teacher('Alia', 'kqsa80as')
console.log(Teach.logMe())
console.log(Teach.createId())// same error
