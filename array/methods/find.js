const students = [
  {
    name: 'Dastan',
    averageGrade: 3.5,
  },
  {
    name: 'Akylai',
    averageGrade: 4.0,
  },
  {
    name: 'Maksat',
    averageGrade: 2.9,
  },
  {
    name: 'Almaz',
    averageGrade: 2.8,
  },
];

const studentWithLowGrades = students.find(({ averageGrade }) => {
  return averageGrade < 3.0;
});
const studentWithLowGradesIndex = students.findIndex(({ averageGrade }) => averageGrade < 3.0);

console.log(studentWithLowGrades);
console.log(studentWithLowGradesIndex);

const studentAlikhan = students.find(({ name }) => name === 'Alikhan');

console.log(studentAlikhan);
