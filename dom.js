const button = document.getElementById('clickButton');
const consoleFn = function (event) {
  console.log(event.target);
};

button.addEventListener('click', consoleFn);

// const button = document.getElementById('clickButton');
// button.addEventListener('click', function () {
//   alert('Click!');
//   console.log('siemano jestem');
// });

// const span1 = document.createElement('span');
// const span2 = document.createElement('span');
// span1.innerHTML = 'Span nr 1';
// span2.innerHTML = 'Span nr 2';

// span1.setAttribute('data-exp', 'failure');
// span2.setAttribute('data-exp', 'success');
// document.body.append(span1);
// document.body.append(span2);
// const span3 = document.createElement('span');
// span3.innerHTML = 'Span nr 3';
// document.body.append(span3);
// span3.style.color = 'red';
// span3.style.backgroundColor = 'black';
// const div = document.createElement('div');
// div.innerHTML = 'Tekst div';
// document.body.append(div);
// div.classList.add('styled');
// div.classList.remove('styled');

// const test = document.getElementById('test');
// const header = document.createElement('header');

// test.append(header);

// const logo = document.createElement('img');
// const nav = document.createElement('nav');
// const button = document.createElement('button');

// header.append(logo);
// header.append(nav);
// header.append(button);

// const ul = document.createElement('ul');
// const li1 = document.createElement('li');
// li1.innerHTML = 'jeden';
// const li2 = document.createElement('li');
// li2.innerHTML = '<span>dwa</span>';

// ul.append(li1);
// ul.append(li2);

// nav.append(ul);

// const ul1 = document.createElement('ul');
// const li4 = document.createElement('li');
// li1.innerHTML = 'jeden';
// ul.append(li1);

// const li = document.createElement('li');
// li2.innerHTML = 'dwa';
// ul.append(li2);

// const li3 = document.createElement('li');
// li3.innerHTML = 'trzy';
// ul.append(li3);

// nav.append(ul);

// const roleElement = document.querySelector('[role=header]');
// console.log(roleElement);

// const headings = document.querySelectorAll('h1, h2, h3');
// console.log(headings);

// const listItems = document.querySelectorAll('.listItem');
// console.log(listItems);
// const listItems2 = document.getElementsByClassName('listItem');

// console.log(listItems2);

// const active = document.getElementById('mojaLista').querySelector('.active');

// console.log(active.innerHTML);

//const strongEl = document.querySelector('div > strong');
//console.log(strongEl);

// const heading = document.getElementById('heading');

// console.log(heading);

// const liElements = document.getElementsByClassName('element');

// console.log(liElements);

// console.log(Array.from(liElements));

// const firstElement = document.querySelector('.element');

// console.log(firstElement);

// const allElements = document.querySelectorAll('.element');

// console.log(allElements);

// const formID = document.querySelectorAll('#heading');

// console.log(formID);

// const divElements = document.querySelectorAll('div');

// console.log(divElements);
