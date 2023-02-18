// call, apply, bind

const Obj1 = function () {
  this.myField = 'Obj1';
  this.myMethod = function () {
    console.log(this);
  };
};

const Obj2 = function () {
  this.myField = 'Obj2';
};

const obj1 = new Obj1();
const obj2 = new Obj2();
obj1.myMethod();

obj1.myMethod.call(obj2);
obj1.myMethod.apply(obj2);
const binded = obj1.myMethod.bind(obj2);
binded();
