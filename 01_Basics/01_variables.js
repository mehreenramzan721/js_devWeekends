const accountID=1234
var accountPassword="668d"
let accountEmail="cdjds"
accountCity="Lahore"
// check if they are changeable or not
accountEmail="dftukd"
accountPassword="utdi"
accountCity="Karachi"
//accountID=666     we cant assign any new value to a constant 
console.log(accountID)
console.log(accountCity)
console.log(accountEmail)
console.log(accountPassword)
/* It is recommended not to use var as it struggles with the scope . when we change it at a single place it will be changed at all places( block scope and functional scope)
*/
console.table([accountID,accountEmail,accountPassword,accountCity])