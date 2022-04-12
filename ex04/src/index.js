// Only change code below this line
class Pets {
    constructor(name, legs) {
        
    }

    walk() {
        var numberOfLegs;
    }
}

class Dog extends Pets {
    constructor() {

    }

    bark() {
        var dogSay;
    }
}
// Only change code above this line

let dog = new Dog(name, legs);  // Change this line
console.log(dog.walk());
console.log(dog.bark());

module.exports = {
    Pets, 
    Dog
}