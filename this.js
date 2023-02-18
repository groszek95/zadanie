// kontekst this

console.log(this);

function myExperiment() {
  console.log(this);
}

myExperiment();

const arrowFunc = () => console.log(this);

arrowFunc();

const myObject = {
  showMeThis: function () {
    console.log(this);
  },

  showMeThis2: () => console.log(this),
};

myObject.showMeThis();

myObject.showMeThis2();
