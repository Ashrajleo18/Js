const oldHero = ["Raj kumar", "Ashok Kumar", "Devananad", "Sunil Datt", "Dilip Kumar"]
const newHero = ["Salman khan", "Shah rukh Khan", "Aamir Khan", "Govinda"]

//oldHero.push(newHero); // problem when we try to push one array inside another array

//console.log(oldHero);
//let mergArray = oldHero.concat(newHero); // Concat function restuns new array object joining two array 
//console.log(typeof mergArray ,mergArray, mergArray.length);

let mergArray = [...oldHero, ...newHero]; // use of spred funciton to merge two array 
//console.log(typeof mergArray ,mergArray, mergArray.length)

const someArr = [1,2,3,[4,5,6],[7,8,9],10,[11,12,13]]// Nested array declared
const formatArr = someArr.flat(Infinity); // Flat function to convert nested array into one array
//console.log(formatArr);

//console.log(Array.isArray("Ashok","Roshan","Arvind"))
//console.log(Array.from(["ashok","ravi","sunil"]))


function checksomething(){
    return [1,3,4,4]
}
const checkFunction = checksomething();
//console.log("Function return is " ,checkFunction)

////////////////////////////////////What is isArray() //////////////////////////////////

if(!Array.isArray(checkFunction)){
    console.log("Not a Array")
    
    }
    else{
        console.log("Array Object")
    }

//// Check by Boolean value resut

const result = Array.isArray(checkFunction)

if (result !== true) {
    
    console.log("Not a Array");

} else
 {     
    console.log("Array Object");
    if (checkFunction.length === 0) {
    console.log("Empty array");
} else {
    console.log("Array with items");
}
}

/////////////////////////////What is Array.from() ////////////////////


const person = { name: "Ashok", age: 25, city: "Mumbai" };

const keyfromPerson = Array.from(Object.keys(person)) // Get the keys from object 
//console.log("key of Person = ", keyfromPerson)

const valuesFromPerson = Array.from(Object.values(person)) //Get the values from object 
//console.log("Values from Person = ", valuesFromPerson)

const entireArrayFromPerson = Array.from(Object.entries(person)) // convert object entires into Array
//console.log("whole array from Person = ",entireArrayFromPerson)

//////////////////////////////////What is Array.of() ////////////////////////////////


const arr = Array.of("ashok", "ravi", "sunil");  ///// use of function to create a Array
console.log(arr);




