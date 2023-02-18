// 1.
// Object.assign
///////////////////

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// true

// 2.
// Object.entries
///////////////////

const object1 = {
  a: 'somestring',
  b: 42,
};

console.log(Object.entries(object1));
// [[key, value]]

// 3.
// Object.keys
///////////////////

const object2 = {
  a: 'somestring',
  b: 42,
  c: false,
};

console.log(Object.keys(object2));
// Array ["a", "b", "c"]

// 4.
// Object.values
///////////////////

const object3 = {
  a: 'somestring',
  b: 42,
  c: false,
};

console.log(Object.values(object3));
// Array ["somestring", 42, false]

// 5.
// Object.fromEntries
///////////////////

const entries = [
  ['foo', 'bar'],
  ['baz', 42],
];

const obj = Object.fromEntries(entries);

console.log(obj);
// Object { foo: "bar", baz: 42 }

// 5.
// Object.freeze
///////////////////

const obj1 = {
  data: 12,
};

Object.freeze(obj1);

obj1.data = 20;

console.log(obj1.data);
// 12
