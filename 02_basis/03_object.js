// How to declare a symbol 
const mySym = Symbol("key1")

const myobj = {
    name: "Amit",
    "lastname": "Kumar",
    Location: "Jaipur",
    email: "amit@gmail.com",
    isloggedin: false,
    lastLoggedin: ["Monday","Friday"],
    [mySym]: "mykey1" /// Create symbol key on object

    
}

myobj.greeting = function(){
        return ` Hello ${this.name},\n Your email is:-  ${this.email} \n last logged day is :- ${this.lastLoggedin}`
    }

// Another way to access the object 
//console.log(myobj["email"]);
//console.log(myobj["lastname"])

// the Symbol key is coming 
console.log (myobj);


//Object.freeze(myobj);// Freeze the object now the changes will not apply

console.log(myobj.greeting());





