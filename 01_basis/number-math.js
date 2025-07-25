let num = 100
//console.log(num.toString().length);
//console.log(typeof num)

//console.log(num.toFixed(2));
//console.log(typeof num)

let newnum = 133.55
//console.log(newnum.toPrecision(3))

const value = 10000000
console.log(value.toLocaleString('en-IN',
    {style: 'currency',
    currency:'INR'
    }

));

//let newnumber = num

//let newnumber = num.toFixed(); // 
//console.log("newnumber =",typeof newnumber)
//console.log("num =",typeof num)



//===============================Math==================
const min = 10;
const max = 20;

const avalue = 4.6
//console.log(Math.round(avalue));
//console.log(Math.ceil(avalue));
//console.log(Math.floor(avalue));

const arr = [4,63,6,3,7,8];
//console.log(Math.min(...arr));

// How to get Random number in between range
let newRandno = Math.floor((Math.random()* (max - min + 1 ))+min);
//console.log(newRandno);

//++++++++++++++++++++++++ Data=========================
const mydate = new Date();
//console.log(mydate.toDateString())
//console.log(mydate.toLocaleDateString())
//console.log(mydate.toDateString())

let myTimestamp = new Date();
//console.log(Math.floor(Date.now()/1000))

const newdate = new Date()
console.log(newdate.toLocaleString('defult',{
   weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric'
     
}))


