// Building Objects

function Person(firstname, lastname) {

    console.log(this)
    this.firstname = firstname;
    this.lastname = lastname
    console.log('This function is invoked')


}
Person.prototype.getFullName = function() { // it is better to add methods (getFullName) inside the prototypes because in functions every time when they are called they occupy memeory space. using them inside the prototypes are more functional!
    return this.firstname + ' ' + this.lastname // it is saving memory space
}

// FUNCTION CONTRUCTORS AND ".PROTOTYPE"
let Resul = new Person('Resul', 'Avsar') // forgetting the usage of new is generally being fogotten. It will give error. Be careful.
console.log('Resul', Resul)

let Doe = new Person('Mustafa', 'Gul') // it will create another space in the memory
console.log(Doe)

Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname
}

console.log(Resul.getFormalFullName())

// Big Word Alert
// Function Constructors: a notmal function that is used to construct objects




// BUILD-IN FUNCTION CONSTRUCTIONS
String.prototype.isLengthGreaterThen = function (limit) {
    return this.length > limit
}

console.log('Resul'.isLengthGreaterThen(3))

// OBJECT.CREATE and  Pure prototypal inheritence

let person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi '+ this.firstname;
    }
}
let Monika = Object.create(person);
Monika.firstname = 'Monika'
Monika.lastname = 'Wollf'
console.log(Monika, 'monika')

// ODDS AND ENDS

let personArr = [

]




























