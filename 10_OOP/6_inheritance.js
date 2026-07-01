class User{
    constructor(username){
        this.username = username; 
    }
    logMe(){
        console.log(`Username is : ${this.username}`)
    }
}


class Teacher extends User{
    constructor( username, email , password ){
        super(username)
        this.email = email;
        this.password = password;
        
    }

    addCourse(){
        return `New course is added by ${this.username}`
    }
}

const chai= new Teacher('chai', 'chai@ggmail.com', ' 123')
console.log(chai.addCourse())
//New course is added by chai

const masalaChai = new User("Masala Chai")
console.log(masalaChai.logMe())

console.log(chai== masalaChai)//false
console.log(chai instanceof Teacher)// true 
