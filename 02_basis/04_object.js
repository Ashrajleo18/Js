const user = {} // defne the object 
//const user = new Object() // defne the object 
//console.log(user)
user.id = "1234abc",
user.name = "Leo",
user.location = "Delhi",
user.isLoggedIn = false

//console.log(user);

//How to create a Nested Object 
const regularUser = {

    userID: "123",
    fullName :{
        userName:{
            firstName: "Ashok",
            lastName: "Rawat",
        }
    },
    mobile: 9188383838,

}
//console.log(regularUser.fullName.userName.firstName) // How to access the nested Array

const obj1 ={ 1:"a", 2:"b"}
const obj2 ={ 3:"a", 4:"b"}
const obj4 ={ 5:"a", 5:"b"}

//const obj3 = Object.assign({},obj1,obj2,obj4) // Empty Target object is given to source object (obj1, obj2)
//console.log(obj3) // Not if we not give {} object the obj1 is treat as Target object

const newObj = {...obj1, ...obj2,...obj4} // Useing spread to merge Object 
//console.log(newObj);

const userKey = Object.keys(user)
const userValue = Object.values(user)
//console.log(userKey,userValue)

//console.log(user.hasOwnProperty('jkdk')) // check the object about the property

userValue.forEach(printval => {
   // console.log(printval)
});
userKey.map((printkey,indexe, arr) =>{
  
  //console.log(`${indexe}keyName is ${printkey.toUpperCase()} array lenght ${arr.length}`)

});

const course = {
    name: "javascript Cource",
    price: 999,
    Instructor: "Kuldeep"
}
// How to Destructuring object
const {price} = course
console.log(price);

// Json object example
// {
//     "name":"rohit",
//     "locaion": "UttamNagar"
//     "City": "Delhi"
// }

// Convert Object to Json object
const myJson = JSON.stringify(regularUser);
//console.log(myJson);

const data = {
    
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Jacob",
        "last": "Nilssen"
      },
      "location": {
        "street": {
          "number": 5406,
          "name": "Ammerudhellinga"
        },
        "city": "Kiberg",
        "state": "Buskerud",
        "country": "Norway",
        "postcode": "5896",
        "coordinates": {
          "latitude": "42.2494",
          "longitude": "-18.3273"
        },
        "timezone": {
          "offset": "+7:00",
          "description": "Bangkok, Hanoi, Jakarta"
        }
      },
      "email": "jacob.nilssen@example.com",
      "login": {
        "uuid": "69d8052c-03bc-4e25-93dd-83fec1cb8dd9",
        "username": "ticklishsnake602",
        "password": "carolina",
        "salt": "bnRW3kxg",
        "md5": "cbc2dd0e1d0551bf80ef27a6480466f5",
        "sha1": "dd42ab6b5e8b7d883f52938d16b408f3b41029b9",
        "sha256": "8a712aff1e1e4fcd2145b46941e8a134e5bec42952a7d767ce8420a17d59fa02"
      },
      "dob": {
        "date": "1958-10-24T03:38:34.805Z",
        "age": 66
      },
      "registered": {
        "date": "2021-07-30T07:31:26.293Z",
        "age": 3
      },
      "phone": "70775885",
      "cell": "96937871",
      "id": {
        "name": "FN",
        "value": "24105840914"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/89.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/89.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/89.jpg"
      },
      "nat": "NO"
    }
  ]
  
}

// const olocation = ( (data.results[0].location))
// console.log(typeof olocation)

//console.log(data.results[0])

const {name,location} = data.results[0]
//console.log(name,location)


// const lockey = Object.keys(location)
// console.log(lockey)

const lockey = Object.keys(location)

function getAllKeys(obj) {
  let keys = [];
  for (let key in obj) {
    keys.push(key);
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      keys = keys.concat(getAllKeys(obj[key]));
    }
  }
  return keys;
}

console.log(getAllKeys(location));





