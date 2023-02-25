const { faker } = require('@faker-js/faker');

const continents = [
  'Asia',
  'Africa',
  'Europe',
  'North America',
  'South America',
  'Oceania',
];

const languages = [
  'JavaScript',
  'Ruby',
  'HTML',
  'CSS',
  'Python',
];

const list = Array(30).fill(0).map(_ => {
  // faker.seed(Date.now());

  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    country: faker.address.country(),
    continent: faker.helpers.arrayElement(continents),
    age: faker.datatype.number({ min: 18, max: 60 }),
    language: faker.helpers.arrayElement(languages),
  }
});

require('fs').writeFile('./programmers-list.json', JSON.stringify(list), (err) => { console.log(err) });
