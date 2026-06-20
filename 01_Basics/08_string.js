const name = "mehr"
let age = 20;
console.log(name + age)// "mehr20": concatenation, age becomes string
console.log(`My name is ${name}`) // "My name is mehr" → template literal
// Creating a String Object (vs string primitive)
let number=new String("bdseai")
console.log(number) // [String:'bdseai']
const gameName = new String('ali-hc-com')
console.log(gameName.charAt(2))   // 'i',char at index 2
console.log(gameName.indexOf('a'))   // 0,first'a' found at index 0

const newString = gameName.substring(0, 4)// we cant use - in this as it will ignore it
console.log(newString)    // 'ali-' → index 0 to 3 (4 not included)
const anotherString = gameName.slice(-8, 4)
console.log(anotherString)   // '' → slice from -8 goes back from index 4, empty

const newStringOne = "   mehreen    "
console.log(newStringOne)     // "   mehreen    "
console.log(newStringOne.trim())  // "mehreen" → removes both-side spaces

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))   // replaces %20 with -
console.log(url.includes('ali')) // false → 'ali' not in url
console.log(gameName.split('-'))    // ['ali','hc', 'com'] → splits by '-'
