const arr = ['Java', 'Python', 'Javascript', 'C#'];

const student1 = 'Alihan';
const student2 = 'Rahat';
const student3 = 'Nurzada';

const students = [student1, student2, student3];

console.log(students[0]);

students[1] = 'Rakhat';

console.log(students[1]);

console.log(students.length);

students.push('Kylych', 'Umut');
students.push('Dastan');
console.log(students);
console.log('-----')
const lastStudent = students.pop();

console.log(students);
console.log('-----')
console.log(lastStudent);
console.log('------------');
students.shift();
console.log(students);

console.log('------------');

students.unshift('Dastan');
students.unshift('Azamat');

console.log(students);

const wallet = [100 * 2, 500, 200];

const points = [3.6, 4.0, 3.8, 3.3];

const mixed = [100, true, 'Hello', points];
console.log(mixed);



