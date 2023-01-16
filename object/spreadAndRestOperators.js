const cats = [{ name: 'Tom', age: 2 }, { name: 'Murka', age: 4 }];

// const tom = cats[0];
// const murka = cats[1];

const [tom, murka] = cats;
console.log(tom);
console.log(murka);

const dogs = [{ name: 'Balto', color: 'blue' }, { name: 'Sharik', color: 'black' }, { name: 'Rembo', color: 'grey' }];

const [balto, ...other] = dogs;
console.log(balto);
console.log(other);

const newDogs = [{ name: 'Tuzik', color: 'black-white' }, ...dogs];
console.log(newDogs);

const numbers = [1, 5, 3, 7, 0, -1, -3, 4];

console.log(Math.min(...numbers));

const tuzik = { name: 'Tuzik', color: 'black-white' };
// const tuzikName = tuzik.name;
// const tuzikColor = tuzik.color;
const { name, color, age } = tuzik;
console.log(name);
console.log(color);
console.log(age);

const { name: tuzikName, color: tuzikColor } = tuzik;
console.log(tuzikName, tuzikColor);

const newTuzik = { ...tuzik, age: 4 };
console.log(newTuzik);

function printDogName([balto, sharik]) {
  console.log('printDogName: ');
  console.log(balto);
  console.log(sharik);
}

printDogName(dogs);

console.log(tuzik.toString());
console.log(dogs.toString());
console.log(numbers.toString(), numbers);

console.log('1' == 1);
console.log('1' === 1);
