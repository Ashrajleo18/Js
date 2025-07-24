const name = "Rohan"
const lastname = "kumar"
const salary = 50000

console.log(`Hello ${name} your salay is ${salary}`)

console.log("The 4th charcter in string is = ",name.charAt(4));// charAt return charter Position in string
console.log("the index of R in string is =",name.indexOf('R')); //indexOf method return the postion



console.log("To join to variable use concat = ",name.concat(" ", lastname)); // concat join the 2 string 

console.log(name.toUpperCase());
console.log(name.length)

let num = 9292
let myvalue = num.toFixed() // to Fixed convert number to string
console.log(typeof myvalue);

const mytext = "Hello audience how are you"
const findtext = mytext.includes("audience") // includes return the boolean value (true, false) depending on result
console.log(findtext);

console.log(mytext.lastIndexOf("how")) // find th postion of text in string

console.log(mytext.replace("audience","guys")) // use of replace method

mystring = "Ashrajleo";
console.log(mystring.length);

console.log(mystring+="Rawat");// AshrajleoRawat

console.log(mystring.substring(0,7))// Substring method extracts characters, between two positions
console.log(mystring.slice(5,9)) //jleo

somestr = "     fog   ";
console.log(somestr.trim());//Fog

url = "w1ww.javascript%20tutorial.*com9"
console.log(url.replace("%20","-")) ///www.javascript-tutorial.com

findcom = url.includes(".com");
console.log(findcom)

if (findcom !=true){

    console.log ("enter correct url");
}
else{
    console.log("please continue");
}
// Use of Ternary operator to do same thing
findwww = url.includes("www");
console.log( findwww,
(findwww !=true) ? ("not enter www") : ("you have enter www")
)
