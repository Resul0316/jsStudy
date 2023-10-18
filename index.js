// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
//////////////////
// Cohersion Operators

// 3 < 2 returns false
// Number(false) returns 0
// console.log(0 < 1) returns true
console.log(Number(false))
console.log(3 < 2 < 1)

// or vise versa for 
console.log(1 < 2 <3);
// Number(true) = 1
console.log(Number(true) < 3)

// or
// Number(null) = 0
//////////////////

///////////////

// "3" == 3 is true
// "3" ==== 3 is false --> Strict equality
// 0 !== false is true  --> strict unequality
// 0 1= false true

// all of the lack of existence values are false
// Existence and Boolean

// Boolean(undefined) = false
// Boolean(null) = false
// Boolean('') = false

let a;

a = 'h'
if (a) {
    console.log('hello world')
}

// 'hi' || 'hello' returns first true which is 'hi'

// // OBJECTS AND FUNCTIONS
// // it is the way that we can add elements to our objects
// let person = new Object()
// person["firstname"] = "Resul";
// person["lastname"] = "Avsar";
// console.log(person);
// // To add sub-objects we can use this way:
// person.address = new Object();
// person.address.street = "via Garibaldi"
// person.address.city = "Catania"
// person.address["number"] = 21
// console.log(person.address);

// OBJECT LITERALS
// let person = {"name":"Resul", "lastname":"avsar"};
// console.log(person);

// let newObject = {}
// newObject.el1 = "a"
// newObject.el2 = "b"
// newObject.el3 = {}
// newObject.el3.el1 = "d"
// console.log(newObject)

let objectLiterals = {
    firstName: "Resul",
    isAProgrammer: true
}
console.log(JSON.stringify(objectLiterals)) // will convert it to a string

// // a valid object literal syntax
// let jsonVlue = {
//     "firstname": "Resul",
//     "isAProgrammer": true
// }
// console.log(JSON.parse(jsonVlue))






