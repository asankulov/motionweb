const students = ['Umut', 'Nurzada', 'Rakhat', 'Alikhan'];

console.log('Firstname: ' + 'Kylych');
const callback = function (value, index) {
  if (index === 2) {
    return index + ') ' + 'Firstname: ' + 'Rahat';
  }
  return index + ') ' + 'Firstname: ' + value;
}
const formattedStudents = students.map(callback);

console.log(formattedStudents);
console.log(students);

const numbers = [1, 2, 3, 4, 5];

const poweredByTwoNumbers = numbers.map((value) => Math.pow(value, 2));
console.log(poweredByTwoNumbers);

const oddNumbers = numbers.filter((value) => value % 2 === 0);
const evenNumbers = numbers.filter((value) => value % 2 === 1);

console.log(oddNumbers);
console.log(evenNumbers);

const filledNumbers = numbers.fill(0, 1, 3);
console.log(filledNumbers);
console.log('-----------------');

const arr = Array(10);
const filledArr = arr.fill(0);
console.log(filledArr);
