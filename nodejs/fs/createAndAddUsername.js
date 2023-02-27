const fs = require('fs/promises');

function createAndAddUsername(list) {
  return list.map((programmer) => {
    const username = programmer.firstName.toLowerCase()
      + programmer.lastName.at(0).toLowerCase()
      + (2020 - programmer.age);

    return {
      ...programmer,
      username,
    };
  });
}

// const obj = {
//   "firstName": "Karl",
//   "lastName": "Russel",
//   "country": "Azerbaijan",
//   "continent": "Asia",
//   "age": 45,
//   "language": "HTML"
// }
//
// 'karl' + 'r' + 2020 - 45;
//
// 'karlr2020' - 45;

fs.readFile('./programmers-list.json')
 .then((list) => {
    const modifiedList = createAndAddUsername(JSON.parse(list));

    return fs.writeFile('./programmers-list-modified.json', JSON.stringify(modifiedList));
 }, (err) => {
   console.log(err);
 })
  .then(() => {
    console.log('File write successful');
  }, (err) => {
    console.log(err);
  })

// const str = 'Hello!';
// console.log(str.at(0));
// console.log(str.at(5));

// const arrayString = ['H', 'e', 'l', 'l', 'o', '!'];

