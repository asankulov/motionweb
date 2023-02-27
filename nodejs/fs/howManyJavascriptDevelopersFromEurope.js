const fs = require('fs');

function howManyJavascriptDevelopersFromEurope(list) {
  let count = 0;

  // for (const programmer of list) {
  //   if (programmer.continent === 'Europe' && programmer.language === 'JavaScript') {
  //     count = count + 1;
  //   }
  // }

  list.forEach((programmer) => {
    if (programmer.continent === 'Europe' && programmer.language === 'JavaScript') {
      count = count + 1;
    }
  });

  // list.filter((programmer) => {
  //   return programmer.continent === 'Europe' && programmer.language === 'JavaScript';
  // })

  return count;
}

fs.readFile(
  './programmers-list.json',
  { encoding: 'utf-8' },
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(howManyJavascriptDevelopersFromEurope(JSON.parse(data)));
    }
  },
)
