// Classes in Javascript
class Person {
    firstName;
    constructor(name) {
        this.firstName = name;
    }
    greet() {
        return this.firstName
    }
}

class Tony extends Person {

    // To access to the Person contructor we must use 'super' keyword

    constructor() {
        super('Hello Resul form super keyword')
    }
    // if we write a greet() method here it will take this greet() method insted of hte Person 
    greet() {
        // but the person greet method is still availalble from here with super keyword
        let greeting = super.greet();
        return 'greeting from ' + greeting
    }
    meet() {
        return 'Nice to meet with you!'
    }
}
let me = new Tony('Tony')
console.log(me.greet())
console.log(me.meet())

let me2  = new Person('Resul')
console.log(me2.greet())





