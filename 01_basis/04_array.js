const myarr1 = [1,2,3,4,5]; // defin array
const myarr2 = new Array (1,2,3,4,5); // defin array

//console.log(myarr1);

const temp = myarr1// add the new value at last
temp.push(6,7,8,9,10)

temp.pop() //remove the last value 
temp.unshift(0) // addthee value at start and shift the other value
temp.shift() // remove the firest elment of array

// console.log(temp);
 const temp2 = temp.join("-") // join all the element into a single string seprated by argument
console.log(typeof temp2, temp2);

// const myarr3 = myarr1.join();
// console.log(myarr3)
// console.log(typeof myarr3)

console.log(temp);

//console.log(temp);
// const myslicearr = temp.slice(1,4)// Slice does not chang ethe origianl Array
// console.log("Slice Array ->",myslicearr)
// console.log("Orignal Aray ->",temp)

const myspliceearr = temp.splice(1,4)/// Splice change the original array
console.log("Splice Array ->",myspliceearr)
console.log("Orignal Aray ->",temp)






