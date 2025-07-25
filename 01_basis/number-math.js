let num = 100
console.log(num.toString());

let newnumber = num

//let newnumber = num.toFixed(); // 
console.log("newnumber =",typeof newnumber)
console.log("num =",typeof num)

// How to get Random number in between range

min = 10;
max = 20;

let newRandno = Math.floor((Math.random()* (max - min + 1 ))+min);
console.log(newRandno);


