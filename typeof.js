// TYPEOF

const variable = 'test';
const variablenum = 33;

console.log(typeof variable === 'string');

console.log(typeof variablenum === 'number');

let data = 22;

if (typeof data === 'string') {
  console.log(data);
} else {
  console.log(`${data}C Gdansk`);
}

function formatNumber(arg) {
  if (typeof arg !== 'number') {
    return console.error('Not a number!');
  }

  return arg * 2;
}

console.log(formatNumber('test'));

console.log(formatNumber(3));
