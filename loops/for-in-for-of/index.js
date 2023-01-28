const array = [1, 2, 3, 4, 5, 6];
const [first, ...rest] = array;

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (let element of array) {
  console.log(element);
}

const person = {
  firstName: 'Alikhan',
  lastName: 'Kurmanbekov',
  age: 19,
};

for (let key in person) {
  console.log(key);
}

for (let [key, value] of Object.entries(person)) {
  console.log('Key: ', key, 'Value: ', value);
}

