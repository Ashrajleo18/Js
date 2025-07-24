// score in strin format 
let score = "55"
//console.log(typeof score) 

// Score converted to number format 

let newScore = Number(score);
//console.log(typeof newScore)
//console.log(newScore);

let score2 = null
let newScore2 = Number(score2)
// console.log(typeof newScore2)
// console.log(newScore2)

//if we conver to number 
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let islogedin = "ashok"
let booleanlogedin = Boolean (islogedin)
// console.log(typeof booleanlogedin)
// console.log(booleanlogedin)

//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "ASHOK" => true

let someNumber = 33
let someStringNumber = String(someNumber)
// console.log(typeof someStringNumber)
// console.log(someStringNumber)

// *********************** Operations ***********************

// console.log(1 + "2"); // retrun 12
// console.log("1" + 2); // retrun 12
// console.log("1" + "2"); // retrun 12
// console.log(1+3 + "3") // retrun 43
// console.log("1"+2+2)// retrun 122
// console.log((3+4)*5-16) // return 19 

let counter = 110
counter++
console.log(counter) // increment value = 111

let x = 3;
const y = x++;
console.log("X =",x,"y", y ) // // x is 4; y is 3

let a = 3;
const b = ++a;
console.log("a =",a,"b", b ) // x is 4; y is 4