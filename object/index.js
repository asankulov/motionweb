const hasCt = 'has-citizenship';

const person = {
  name: 'Alikhan',
  age: 18,
  hasDegree: true,
  [hasCt]: true,
  eat: function () {
    console.log('eat action');
  },
  sleep() {
    console.log('sleep action');
  },
  walk: () => {
    console.log('walk action');
  },
};
console.log(person[hasCt]);
person.age = 20;
console.log(person.name);

person.eat();

const habits = Symbol('habits');

const age = 'age';
person[age] = 21;
// person.habits = ['eat', 'sleep', 'walk'];
person[habits] = ['eat', 'sleep', 'walk'];
console.log(person);
person[habits].push('study');
console.log(person);

console.log(person[hasCt]);

const otherPerson = person;
const thirdPerson = otherPerson;

otherPerson.hasDegree = false;

// console.log(otherPerson.hasDegree);
// console.log(person.hasDegree);

person.hasDegree = true;
// console.log(otherPerson.hasDegree);
// console.log(person.hasDegree);

const obj1 = { talaa: 1 };
const obj2 = { talaa: 1 };
const obj3 = { talaa: 2 };

// console.log(obj1 === obj2);
console.log(obj1.talaa === obj2.talaa);
console.log(obj1.talaa === obj3.talaa);
// console.log(person === otherPerson);


function printName(name) {
  console.log('Name: ' + name);
}

printName('Umut');

delete person.sleep;

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
Object.freeze(person);
person.name = 'Kylych';
person.height = 1.60;
delete person.age;
console.log(person);

const student = {
  grade: 2,
  score: 3.5,
  gender: 'female',
};

// Object.assign(student, person, { gender: 'male' });
const combinedObject = Object.assign({}, person, student);
console.log(combinedObject);
// console.log(student);

const array = [{ score: 1.9 }, { name: 'Alikhan' }];
