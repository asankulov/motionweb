const patients = [
  {
    name: 'Almaz',
    vaccinated: true,
  },
  {
    name: 'Maksat',
    vaccinated: true,
  },
  {
    name: 'Aydana',
    vaccinated: true,
  },
];

const hasEveryBodyVaccinated = patients.every((value) => {
  return value.vaccinated;
});

console.log(hasEveryBodyVaccinated);
