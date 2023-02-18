// KLASY

class Vehicle {
  constructor(vehicleType) {
    this.vehicleType = vehicleType;
  }

  static hello() {
    console.info('Hello!');
  }
}

class Car extends Vehicle {
  constructor(roadType) {
    super('Car');

    this.roadType = roadType;
  }

  printInfo() {
    console.log(this.vehicleType, this.roadType);
  }
}

class Boat extends Vehicle {
  constructor(roadType) {
    super('Boat');

    this.roadType = roadType;
  }

  printInfo() {
    console.log(this.vehicleType, this.roadType);
  }
}

const car = new Car('asfalt');
const boat = new Boat('woda');

car.printInfo();
boat.printInfo();

Vehicle.hello();
