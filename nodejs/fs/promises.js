const fs = require('fs/promises');

// fs.readFile(
//   './example.txt',
//   { encoding: 'utf-8' },
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('file data: ', data);
//     }
//   },
// );


function funcWithPromise() {
  return new Promise((resolve, reject) => {
    // resolve(true);
    reject(false);
  });
}

funcWithPromise()
  .then((value) => {
    console.log('resolved');
    console.log(value);
  }, (err) => {
    console.log('rejected');
    console.log(err);
  });

fs.readFile('./example.txt', {encoding: 'utf-8'})
  .then((data) => {
    return fs.writeFile('./example-2.txt', data);
  })
  .then(() => {
    console.log('File write was successful!')
  }, (err) => {
    console.log(err);
  });


// fs.readFile(
//   './example.txt',
//   { encoding: 'utf-8' },
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       fs.writeFile('./example-1.txt', data, (err) => {
//         fs.appendFile('./example-2.txt', data, (err) => {
//           console.log()
//         })
//       });
//     }
//   },
// );

