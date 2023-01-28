const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = [];
numbers.forEach((value) => {
  if (value % 2 === 0) {
    evenNumbers.push(value);
  }
});

console.log(evenNumbers);

const students = [
  {
    name: 'Nurzada',
    gender: 'female'
  },
  {
    name: 'Rakhat',
    gender: 'female',
  },
];

const studentsV2 = [];

students.forEach((value) => {
  studentsV2.push({
    ...value,
    gender: value.gender === 'female' ? 'f' : 'm',
  });
  // if (value.gender === 'female') {
  //   studentsV2.push({
  //     ...value,
  //     gender: 'f',
  //   });
  // } else {
  //   studentsV2.push({
  //     ...value,
  //     gender: 'm',
  //   });
  // }
});

console.log(studentsV2);

const goods = [
  {
    name: 'Laptop',
    price: 555.55,
  },
  {
    name: 'Smartphone',
    price: 405,
  },
];

// const { price } = { price: 123, name: 'sdflsf' };
let totalPrice = 0;
goods.forEach(({ price }) => {
  totalPrice += price;
});

console.log(totalPrice);
