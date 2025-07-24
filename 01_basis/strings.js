const name = "Rohan"
const lastname = "kumar"
const salary = 50000

console.log(`Hello ${name} your salay is ${salary}`)

console.log(name.charAt(4));// charAt return charter Position in string
console.log(name.concat(" ", lastname)); // concat join the 2 string 

console.log(name.toUpperCase());
console.log(name.length)

let num = 9292
let myvalue = num.toFixed() // to Fixed convert number to string
console.log(typeof myvalue);

const mytext = "Hello audience how are you"
const find = mytext.includes("audience") // includes return the boolean value (true, false) depending on result
console.log(find);