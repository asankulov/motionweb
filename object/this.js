const person = {
  name: 'Azamat',
  age: 23,
  sayName() {
    console.log('My name is', this.name);
  },
  sayName2x() {
    this.sayName();
    this.sayName();
  },
  sayAge() {
    console.log(this.age);
  },
};
person.sayName2x();
person.sayAge();


// person.sayName();
//
// person.name = 'Aydana';
//
// person.sayName();


const cat = {
  color: 'grey',
  voice: 'myau',
};

const dog = {
  color: 'brown',
  voice: 'Av-av',
};

function makeVoice() {
  console.log(this.voice);
}

cat.makeVoice = makeVoice;
dog.makeVoice = makeVoice;

cat.makeVoice();
dog.makeVoice();

makeVoice();

const wolf = {
  color: 'grey',
  voice: 'Au',
  makeVoice: () => {
    console.log(this.voice);
  },
};

wolf.makeVoice();

const cow = {
  color: 'white',
  voice: 'Moo',
  makeVoice() {
    const arrowMakeVoice = () => {
      console.log(this.voice);
    }
    const usualFunc = function () {
      console.log(this.voice);
    }

    usualFunc();
    arrowMakeVoice();
  }
};

cow.makeVoice();

const calculator = {
  read(propertyName, propertyValue) {
    this[propertyName] = propertyValue;
  },
  sum() {
    return Object
      .values(this)
      .filter((value) => typeof value === 'number')
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  },
  mul() {
    let product = 1;

    for (let value of Object.values(this)) {
      if (typeof value === 'number') {
        product = product * value;
      }
    }

    for (let key in this) {
      if (typeof this[key] === 'number') {
        product *= this[key];
      }
    }

    Object.values(this).forEach((value) => {
      if (typeof value === 'number') {
        product *= value;
      }
    });

    const values = Object.values(this);

    for (let i = 0; i < values.length; i++) {
      if (typeof values[i] === 'number') {
        product *= values[i];
      }
    }

    return product;
  },
};

calculator.read('number1', 100);
calculator.read('number2', 200);
console.log(calculator.sum());
console.log(calculator.mul());

calculator.read('number3', 100);
console.log(calculator.sum());
