// Object Oriented Javascript and Prototype inheritence
var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;  
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;

for (let prop in john) {
    if (john.hasOwnProperty(prop)) { // otherwise it will console also the properties of the john object
        console.log(prop + ' ' + john[prop])
    }
}

// REFLECTION
// An object can look at itself, listing and changing its properties and methods

var jane = {
    address: '111 Main St.',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;   
    }
}

var jim = {
    getFirstName: function() {
        return firstname
    }
}

_.extend(john, jane, jim) // underscore
console.log(john)





































