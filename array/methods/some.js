const patients = [
  {
    name: 'Almaz',
    infected: true,
    from: 'Uhan'
  },
  {
    name: 'Maksat',
    infected: false,
  },
  {
    name: 'Aydana',
    infected: false,
  },
];

const isThereAnyoneInfected = patients.some((value) => {
  return value.from === 'Uhan';
});

console.log(isThereAnyoneInfected);
