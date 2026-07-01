function setUsername(username){
    this.username= username;
    console.log("Executed")
}

function createUser(username,email, password){
    setUsername.call(this,username)
    this.email= email
    this.password = password 
}

const chai= new createUser("chai","chai@gmail","32462")
console.log(chai)