const fs = require('fs');

function isThereRubyDeveloper(list) {
  return list.some((programmer) => programmer.language === 'Ruby');
}

fs.readFile(
  './programmers-list.json',
  { encoding: 'utf-8' },
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(isThereRubyDeveloper(JSON.parse(data)));
    }
  },
)

