const fs = require('fs');

fs.readFile(
  './example.txt',
  { encoding: 'utf-8' },
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      fs.writeFile('./example-1.txt', data, (err) => {
        fs.appendFile('./example-2.txt', data, (err) => {
          console.log()
        })
      });
    }
  },
);

// const data = fs.readFileSync('./example.txt', { encoding: 'utf-8' });

// console.log('readFileSync data: ', data);
//
// console.log('code after fs.readFile');
// console.log('2 code after fs.readFile');


// fs.writeFile(
//   './example.txt',
//   'Hello, FS!',
//   { encoding: 'utf-8' },
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('file successfully updated!');
//     }
//   },
// )

console.log('code after fs.writeFile');
console.log('2 code after fs.writeFile');

// fs.writeFile(
//   './example-1.txt',
//   'Hello, Node.js!\n',
//   { encoding: 'utf-8' },
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('file successfully updated!');
//     }
//   },
// )

fs.appendFile(
  './example-1.txt',
  '\nHello, Motionweb!',
  { encoding: 'utf-8' },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('data successfully appended!');
    }
  }
)

// fs.mkdir(
//   './example-dir',
//   {},
//   (err, path) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(path);
//     }
//   }
// );

fs.unlink('./example-2.txt', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('file deleted!');
  }
});
