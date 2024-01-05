//* Understand Where an Object’s Prototype Comes From

//? Use isPrototypeOf to check the prototype of beagle.

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
Dog.prototype.isPrototypeOf(beagle);
