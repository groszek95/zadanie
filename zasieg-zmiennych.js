// zasięg zmiennych

var variable = {};

function test() {
  var test2 = 'value';
  console.log(variable);
  this.myMethod = function () {
    var test2 = 'value2';
  };
}

variable;
