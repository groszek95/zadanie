// PROTOTYPY

Array.prototype.awesomeFilter = function (callback) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    callback(this[i]) ? arr.push(this[i]) : null;
  }

  return arr;
};

const arr = [1, 2, 3];

const filtered = arr.awesomeFilter((item) => item === 3);
console.log(filtered); //[3]

const Animal = function (name) {
  this.name = name;
  this.canSpeak = false;
};

Animal.prototype.speak = function () {
  if (this.canSpeak) {
    console.log('Dzwiek!');
  } else {
    console.error('Ryby nie wydaja dzwiekow!');
  }
};

const Dog = function (name, canSpeak) {
  Animal.call(this, name);
  this.canSpeak = canSpeak;
};

Dog.prototype = Object.create(Animal.prototype);

const Cat = function (name, canSpeak) {
  Animal.call(this, name);
  this.canSpeak = canSpeak;
};

Cat.prototype = Object.create(Animal.prototype);

const Fish = function (name, canSpeak) {
  Animal.call(this, name);
  this.canSpeak = canSpeak;
};

Fish.prototype = Object.create(Animal.prototype);

const dog = new Dog('Azor', true);
const cat = new Cat('Azor', true);
const fish = new Fish('Azor', false);

dog.speak();
cat.speak();
fish.speak();
