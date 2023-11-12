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

// FUNCTIONS ARE OBJECTS
let greet = () => {
    console.log('Hello')
}
// considering functions are object is JS -> we can do:

// greet.person1 = 'Person1 greetings'
// console.log(greet())
// console.log(greet)
// console.log(greet.person1) // that is how I can add an onject to my function. Because FUnctions are objects

// FUNCTION STATEMENTS AND FUNCTION EXPRESSIONS

// functions are always in the memory and we can call them even before they declared such as;
beforeCall()
function beforeCall() {
    console.log('hi')
}
// but for this one we can't do the same issua becasue we declare first name. Because here it see first variable not function. So it doesn't take it to memory.
let anotherGreet = () => {
    console.log('hi')
}
anotherGreet()
// // NOTE!
// // mutate: To change something.
// // inmutable means : cannot be changed

// // By Value vs by reference
// // by value (prmitives)
// let c = 3
// let b;
// b = c
// c = 2
// console.log(b)
// console.log(c)
// // by refenrence (all objects(including functions))
// let d = {"greeting":"hey"}
// let e;
// e = d
// d.greeting = 'you there' // mutate
// // both of them will change because they are pointing some location in memory
// console.log(d)
// console.log(e)

// // by refenrence as a parameter
// function changeGreeting(obj) {
//     obj.greeting = 'ahahaah' // mutate
// }

// changeGreeting(e); // we have mutate the values of e and d
// console.log(d)
// console.log(e)

// // Equals operator sets up new memory space (new address)
// e = {'greeting': 'howdy'}
// console.log(d)
// console.log(e)

// ***********************************************************

// OBJECTS FUNCTIONS AND THIS // 38

// Pointing the global objects with this inside the functions. Whenever we create a function or fuction expression it will point the global object!
// Example:
function a2() {
    console.log(this, 'this from a2()');
    this.newVariable = 'Hello' // we are attaching it to the global object
}
a2()

let ab = function() {
    console.log(this, 'this from ab()')
}
ab()

// this case is a method in an object. Check the log 
var abc = {
    name: 'this is abc object',
    // change name
    log: function() {
        var self  = this;

        self.name = 'updated abc object';
        console.log(self, 'from log')

        // in this way it points the global object and we can find it through window. if we don't want to change it globally we have to follow the step with SELF!
    //     var setname = function(newname) {
    //         this.name = newname;
    //     }
    //     setname('updated again! abc object');
    //     console.log(this);
    // }
        var setname = function(newname) {
            self.name = newname;
        }
        setname('updated again! abc object');
        console.log(self);
    }
}
abc.log()

// method in object


const studyMethodFalse = {
    first: 'this is the first element',
    log: function() {
        console.log(this, '123')
        let changeVariable = function(newVar) {
            this.first = newVar
        }
        changeVariable('this is the second changed element') // in this way we see it in the window object globally
    }
}
studyMethodFalse.log()

// we have to follow this steps:
const studyMethodCorrect = {
    first: 'Hello from the first element!',
    log: function() {
        let self = this
        console.log(self, 'self')
        
        let changeVariable = function(newVar) {
            self.first = newVar
        }
        changeVariable('Hello changed with self inside the function')
    }
}

studyMethodCorrect.log()
// ***********************************************************

// ******************
// Arrays
let arr = [
    1,
    false,
    {
        name: 'Resul',
        address: 'via garibaldi'
    },
    function(name) {
        let greetings = 'Hello ';
        console.log(greetings + name)
    },
    'hey'
]
console.log(arr)
arr[3]('Mustafa')
// ******************
// immediately Invoked functions expressions(IIFE): // 45

// function statement
function greeting(name) {
    console.log('Hello, this is a function statement', name)
}
// function expression
let greeting2 = function(name) {
    console.log('Hello, this is a function expression', name)
}
greeting('resul')
greeting2('mustafa')

// Here is the exact example of IIFE:
let greeting3 = function(name) {
    console.log('I am IIFE', name);
}('function')

// this piece of code will give a syntax error:
// function(name) {
//     console.log('I am an error')
// }

// if we wrap it inside the brakets () the error dissappears and it becames a valid syntax for js!
// in this way it becomes function expression
// (function(name) {
//     return console.log('I am the correct form ', name)
// }()) // i don't know why but it doesn't work
 
// ******************
// closures
// this topic is a bit confusing so I can check it later // 47-48
function buildFunctions() {
    var arr = [];
    for (var i= 0; i<3; i++) {
        arr.push(
            function() {
                console.log(i)
            }
        )
    }
    return arr;
}
let fs = buildFunctions();
// these all three function calls will return 3 because when they are executed the result is alredy 3. 
fs[0]()
fs[1]()
fs[2]()

// Correct way of doing it:
function buildFunctions2() {
    var arr = [];
    for (var i= 0; i<3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j); // in this way we are keeping it every time in a different execution context
                }
            }(i))
        )
    }
    return arr;
}
let fs2 = buildFunctions2();
fs2[0]()
fs2[1]()
fs2[2]()

// ******************









