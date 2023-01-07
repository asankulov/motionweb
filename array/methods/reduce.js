const numbers = [3.2, 3.5, 4.0, 3.8, 3.0];

const sum = numbers.reduce((previousValue, currentValue) => {
  previousValue = previousValue + currentValue;

  return previousValue;
}, 0);

console.log(sum / numbers.length);

const students = ['Umut', 'Nurzada', 'Alihan', 'Rahat'];

const maxLengthStudentName = students.reduce((prev, curr) => {
  if (curr.length > prev.length) {
    return curr;
  }

  return prev;
}, '');

console.log('Max length student name: ' + maxLengthStudentName);

const studentsTotalLength = students.reduce((prevVal, currVal) => {
  return prevVal + currVal.length;
}, 0);
console.log('Average length of student names: ' + studentsTotalLength / students.length);

const newStudents = students.reduce((prevVal, currVal) => {
  prevVal.push('Firstname: ' + currVal);

  return prevVal;
}, []);

console.log(newStudents);

const name = ['K', 'y', 'l', 'y', 'c', 'h'];

const fullName = name.reduce((prevVal, currVal) => {
  prevVal += currVal;

  return prevVal;
}, 'Fullname: ');

console.log(fullName.length);

const filteredStudents = students.reduce((prev, curr) => {
  if (curr.length > 5) {
    prev.push(curr);
  }

  return prev;
}, []);

const filteredStudentsV2 = students.filter((val) => val.length > 5);

console.log(filteredStudents);
console.log(filteredStudentsV2);

