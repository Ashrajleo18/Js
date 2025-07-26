const myarr1 = [1,2,3,4,5]; // defin array
const myarr2 = new Array (1,2,3,4,5); // defin array

myarr1.push(6) // add the new value at last
myarr1.push(7)
myarr1.pop() //remove the last value 

myarr1.unshift("Ashok") // addthee value at start and shift the other value
myarr1.shift();

console.log(myarr1);

const myarr3 = myarr1.join();
console.log(myarr3)
console.log(typeof myarr3)

//console.log(myarr1);
const myslicearr = myarr1.slice(1,4)// Slice does not chang ethe origianl Array
console.log("Slice Array ->",myslicearr)
console.log("Orignal Aray ->",myarr1)

const myspliceearr = myarr1.splice(1,4)/// Splice change the original array
console.log("Splice Array ->",myspliceearr)
console.log("Orignal Aray ->",myarr1)






